import { createReducer } from '@reduxjs/toolkit';
import {
  offersUpdated,
  offersNearbyUpdated,
  offerUpdated,
  reviewCreated,
  favoriteOfferStatusUpdated,
  favoriteOffersUpdated,
  serverStatusUpdated,
  favoriteOffersDeleted
} from '../action';
import { APIResourceStatus, ServerStatus } from '../../const';
import { capitalizeFirstLetter, getResource } from '../../utils/util';

const SLICE_DOMAIN = 'api/';
const ActionEndingMatcher = {
  STARTED: 'Started',
  LOADED: '/loaded',
  FAILED: 'Failed',
  CLEARED: '/cleared',
};

const isStartedAction = (action) => action.type?.startsWith(SLICE_DOMAIN) && action.type?.endsWith(ActionEndingMatcher.STARTED);
const isLoadedAction = (action) => action.type?.startsWith(SLICE_DOMAIN) && action.type?.endsWith(ActionEndingMatcher.LOADED);
const isFailedAction = (action) => action.type?.startsWith(SLICE_DOMAIN) && action.type?.endsWith(ActionEndingMatcher.FAILED);
const isClearedAction = (action) => action.type?.startsWith(SLICE_DOMAIN) && action.type?.endsWith(ActionEndingMatcher.CLEARED);

const geInitialDataState = (data = []) => ({
  data,
  status: APIResourceStatus.IDLE,
  error: {
    data: '',
    status: 0,
    statusText: '',
  },
});

const initialStateFactory = {
  getOffers: () => geInitialDataState(),
  getOffersNearby: () => geInitialDataState(),
  getOffer: () => geInitialDataState({}),
  getReviews: () => geInitialDataState(),
  getFavoriteOffers: () => geInitialDataState(),
  getCreateReviewRequest: () => geInitialDataState(null),
  getUpdateFavoriteOfferStatusRequest: () => geInitialDataState(null),
  getServerStatus: () => ServerStatus.IDLE,
};

const getInitialState = (factory) => ({
  offers: factory.getOffers(),
  offersNearby: factory.getOffersNearby(),
  offer: factory.getOffer(),
  reviews: factory.getReviews(),
  favoriteOffers: factory.getFavoriteOffers(),
  createReviewRequest: factory.getCreateReviewRequest(),
  updateFavoriteOfferStatusRequest: factory.getUpdateFavoriteOfferStatusRequest(),
  serverStatus: factory.getServerStatus(),
});

const api = createReducer(getInitialState(initialStateFactory), (builder) => {
  builder
    .addCase(offersUpdated, (state, action) => {
      const index = state.offers.data.findIndex(({ id }) => id === action.payload.id);

      if (index !== -1) {
        state.offers.data[index] = {
          ...state.offers.data[index],
          ...action.payload,
        };
      }
    })
    .addCase(offersNearbyUpdated, (state, action) => {
      const index = state.offersNearby.data.findIndex(({ id }) => id === action.payload.id);

      if (index !== -1) {
        state.offersNearby.data[index] = {
          ...state.offersNearby.data[index],
          ...action.payload,
        };
      }
    })
    .addCase(offerUpdated, (state, action) => {
      state.offer.data = {
        ...state.offer.data,
        ...action.payload,
      };
    })
    .addCase(favoriteOffersUpdated, (state, action) => {
      const index = state.favoriteOffers.data.findIndex(({ id }) => id === action.payload.id);

      if (index !== -1) {
        state.favoriteOffers.data[index] = {
          ...state.favoriteOffers.data[index],
          ...action.payload,
        };
      }
    })
    .addCase(favoriteOffersDeleted, (state, action) => {
      state.favoriteOffers.data = state.favoriteOffers.data.filter((offer) => offer.id !== action.payload.id);
    })
    .addCase(reviewCreated, (state, action) => {
      state.reviews.data = action.payload;
      state.createReviewRequest.status = APIResourceStatus.SUCCEEDED;
    })
    .addCase(favoriteOfferStatusUpdated, (state) => {
      state.updateFavoriteOfferStatusRequest.status = APIResourceStatus.SUCCEEDED;
    })
    .addCase(serverStatusUpdated, (state, action) => {
      state.serverStatus = action.payload;
    })
    .addMatcher(isStartedAction, (state, action) => {
      const resource = getResource(action.type);
      state[resource].status = APIResourceStatus.IN_PROGRESS;
    })
    .addMatcher(isLoadedAction, (state, action) => {
      const resource = getResource(action.type);

      if (action.payload && Object.prototype.hasOwnProperty.call(state[resource], 'data')) {
        state[resource].data = action.payload;
      }

      state[resource].status = APIResourceStatus.SUCCEEDED;
    })
    .addMatcher(isFailedAction, (state, action) => {
      const resource = getResource(action.type);
      state[resource].status = APIResourceStatus.FAILED;
      state[resource].error = action.payload;
    })
    .addMatcher(isClearedAction, (state, action) => {
      const resource = getResource(action.type);
      state[resource] = initialStateFactory[`get${capitalizeFirstLetter(resource)}`]();
    });
});

export default api;
