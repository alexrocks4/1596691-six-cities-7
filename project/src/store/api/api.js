import { createReducer } from '@reduxjs/toolkit';
import {
  offersFetchingStarted,
  offersLoaded,
  offersNearbyFetchingStarted,
  offersNearbyLoaded,
  offerFetchingStarted,
  offerLoaded,
  offerFetchingFailed,
  reviewsFetchingStarted,
  reviewsFetchingFailed,
  reviewsLoaded
} from '../action';
import { APIResourceStatus } from '../../const';

const getInitialFetchingError = () => ({
  data: '',
  status: 0,
  statusText: '',
});

const initialState = {
  offers: {
    data: [],
    status: APIResourceStatus.IDLE,
    error: getInitialFetchingError(),
  },
  offersNearby: {
    data: [],
    status: APIResourceStatus.IDLE,
    error: getInitialFetchingError(),
  },
  offer: {
    data: {},
    status: APIResourceStatus.IDLE,
    error: getInitialFetchingError(),
  },
  reviews: {
    data: [],
    status: APIResourceStatus.IDLE,
    error: getInitialFetchingError(),
  },
};

const api = createReducer(initialState, (builder) => {
  builder
    .addCase(offersFetchingStarted, (state) => {
      state.offers.status = APIResourceStatus.LOADING;
    })
    .addCase(offersLoaded, (state, action) => {
      state.offers.data = action.payload;
      state.offers.status = APIResourceStatus.SUCCEEDED;
    })
    .addCase(offersNearbyFetchingStarted, (state) => {
      state.offersNearby.status = APIResourceStatus.LOADING;
    })
    .addCase(offersNearbyLoaded, (state, action) => {
      state.offersNearby.data = action.payload;
      state.offersNearby.status = APIResourceStatus.SUCCEEDED;
    })
    .addCase(offerFetchingStarted, (state) => {
      state.offer.status = APIResourceStatus.LOADING;
    })
    .addCase(offerFetchingFailed, (state, action) => {
      state.offer.status = APIResourceStatus.FAILED;
      state.offer.error = action.payload;
    })
    .addCase(offerLoaded, (state, action) => {
      state.offer.data = action.payload;
      state.offer.status = APIResourceStatus.SUCCEEDED;
    })
    .addCase(reviewsFetchingStarted, (state) => {
      state.reviews.status = APIResourceStatus.LOADING;
    })
    .addCase(reviewsFetchingFailed, (state, action) => {
      state.reviews.status = APIResourceStatus.FAILED;
      state.reviews.error = action.payload;
    })
    .addCase(reviewsLoaded, (state, action) => {
      state.reviews.data = action.payload;
      state.reviews.status = APIResourceStatus.SUCCEEDED;
    });
});

export default api;
