import { createReducer } from '@reduxjs/toolkit';
import {
  offersFetchingStarted,
  offersLoaded,
  offersNearbyFetchingStarted,
  offersNearbyLoaded,
  offerFetchingStarted,
  offerLoaded
} from '../action';
import { APIResourceStatus } from '../../const';

const initialState = {
  offers: {
    data: [],
    status: APIResourceStatus.IDLE,
    error: null,
  },
  offersNearby: {
    data: [],
    status: APIResourceStatus.IDLE,
    error: null,
  },
  offer: {
    data: {},
    status: APIResourceStatus.IDLE,
    error: null,
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
    .addCase(offerLoaded, (state, action) => {
      state.offer.data = action.payload;
      state.offer.status = APIResourceStatus.SUCCEEDED;
    });
});

export default api;
