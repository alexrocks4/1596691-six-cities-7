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
  reviewsLoaded,
  reviewCreationStarted,
  reviewCreationFailed,
  reviewCreated
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
  createReviewRequest: {
    status: APIResourceStatus.IDLE,
    error: getInitialFetchingError(),
  },
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
    .addCase(offersNearbyFetchingStarted, (state) => {
      state.offersNearby.status = APIResourceStatus.IN_PROGRESS;
    })
    .addCase(offersNearbyLoaded, (state, action) => {
      state.offersNearby.data = action.payload;
      state.offersNearby.status = APIResourceStatus.SUCCEEDED;
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
    });
});

export default api;
