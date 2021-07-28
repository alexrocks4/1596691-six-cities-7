import { createReducer } from '@reduxjs/toolkit';
import {
  offersFetchingStarted,
  offersLoaded,
  offersUpdated,
  offersNearbyFetchingStarted,
  offersNearbyLoaded,
  offersNearbyUpdated,
  offerFetchingStarted,
  offerLoaded,
  offerUpdated,
  offerFetchingFailed,
  reviewsFetchingStarted,
  reviewsFetchingFailed,
  reviewsLoaded,
  reviewCreationStarted,
  reviewCreationFailed,
  reviewCreated,
  favoriteOfferStatusUpdatingStarted,
  favoriteOfferStatusUpdatingFailed,
  favoriteOfferStatusUpdated,
  favoriteOffersFetchingStarted,
  favoriteOffersFetchingFailed,
  favoriteOffersLoaded,
  favoriteOffersUpdated,
  offersCleared,
  serverStatusUpdated,
  favoriteOffersCleared,
  favoriteOffersDeleted
} from '../action';
import { APIResourceStatus, ServerStatus } from '../../const';

const getInitialFetchingError = () => ({
  data: '',
  status: 0,
  statusText: '',
});

const geInitialDataState = (data = []) => ({
  data,
  status: APIResourceStatus.IDLE,
  error: getInitialFetchingError(),
});

const initialState = {
  offers: geInitialDataState(),
  offersNearby: geInitialDataState(),
  offer: geInitialDataState({}),
  reviews: geInitialDataState(),
  favoriteOffers: geInitialDataState(),
  createReviewRequest: geInitialDataState(null),
  updateFavoriteOfferStatusRequest: geInitialDataState(null),
  serverStatus: ServerStatus.IDLE,
};

const api = createReducer(initialState, (builder) => {
  builder
    .addCase(offersFetchingStarted, (state) => {
      state.offers.status = APIResourceStatus.IN_PROGRESS;
    })
    .addCase(offersLoaded, (state, action) => {
      state.offers.data = action.payload;
      state.offers.status = APIResourceStatus.SUCCEEDED;
    })
    .addCase(offersUpdated, (state, action) => {
      const index = state.offers.data.findIndex(({ id }) => id === action.payload.id);

      if (index !== -1) {
        state.offers.data[index] = {
          ...state.offers.data[index],
          ...action.payload,
        };
      }
    })
    .addCase(offersCleared, (state) => {
      state.offers = geInitialDataState();
    })
    .addCase(offersNearbyFetchingStarted, (state) => {
      state.offersNearby.status = APIResourceStatus.IN_PROGRESS;
    })
    .addCase(offersNearbyLoaded, (state, action) => {
      state.offersNearby.data = action.payload;
      state.offersNearby.status = APIResourceStatus.SUCCEEDED;
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
    .addCase(offerFetchingStarted, (state) => {
      state.offer.status = APIResourceStatus.IN_PROGRESS;
    })
    .addCase(offerFetchingFailed, (state, action) => {
      state.offer.status = APIResourceStatus.FAILED;
      state.offer.error = action.payload;
    })
    .addCase(offerLoaded, (state, action) => {
      state.offer.data = action.payload;
      state.offer.status = APIResourceStatus.SUCCEEDED;
    })
    .addCase(offerUpdated, (state, action) => {
      state.offer.data = {
        ...state.offer.data,
        ...action.payload,
      };
    })
    .addCase(favoriteOffersFetchingStarted, (state) => {
      state.favoriteOffers.status = APIResourceStatus.IN_PROGRESS;
    })
    .addCase(favoriteOffersFetchingFailed, (state, action) => {
      state.favoriteOffers.status = APIResourceStatus.FAILED;
      state.favoriteOffers.error = action.payload;
    })
    .addCase(favoriteOffersLoaded, (state, action) => {
      state.favoriteOffers.data = action.payload;
      state.favoriteOffers.status = APIResourceStatus.SUCCEEDED;
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
    .addCase(favoriteOffersCleared, (state) => {
      state.favoriteOffers = geInitialDataState();
    })
    .addCase(reviewsFetchingStarted, (state) => {
      state.reviews.status = APIResourceStatus.IN_PROGRESS;
    })
    .addCase(reviewsFetchingFailed, (state, action) => {
      state.reviews.status = APIResourceStatus.FAILED;
      state.reviews.error = action.payload;
    })
    .addCase(reviewsLoaded, (state, action) => {
      state.reviews.data = action.payload;
      state.reviews.status = APIResourceStatus.SUCCEEDED;
    })
    .addCase(reviewCreationStarted, (state) => {
      state.createReviewRequest.status = APIResourceStatus.IN_PROGRESS;
    })
    .addCase(reviewCreationFailed, (state, action) => {
      state.createReviewRequest.status = APIResourceStatus.FAILED;
      state.createReviewRequest.error = action.payload;
    })
    .addCase(reviewCreated, (state, action) => {
      state.reviews.data = action.payload;
      state.createReviewRequest.status = APIResourceStatus.SUCCEEDED;
    })
    .addCase(favoriteOfferStatusUpdatingStarted, (state) => {
      state.updateFavoriteOfferStatusRequest.status = APIResourceStatus.IN_PROGRESS;
    })
    .addCase(favoriteOfferStatusUpdatingFailed, (state, action) => {
      state.updateFavoriteOfferStatusRequest.status = APIResourceStatus.FAILED;
      state.updateFavoriteOfferStatusRequest.error = action.payload;
    })
    .addCase(favoriteOfferStatusUpdated, (state) => {
      state.updateFavoriteOfferStatusRequest.status = APIResourceStatus.SUCCEEDED;
    })
    .addCase(serverStatusUpdated, (state, action) => {
      state.serverStatus = action.payload;
    });
});

export default api;
