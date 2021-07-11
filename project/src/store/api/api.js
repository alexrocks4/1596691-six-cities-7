import { createReducer } from '@reduxjs/toolkit';
import { offersFetchingStarted, offersLoaded } from '../action';
import { APIResourceStatus } from '../../const';

const initialState = {
  offers: {
    data: [],
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
    });
});

export default api;
