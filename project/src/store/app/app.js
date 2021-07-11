import { createReducer } from '@reduxjs/toolkit';
import { cityUpdated } from '../action';
import { CityName } from '../../const';

const initialState = {
  city: CityName.PARIS,
};

const app = createReducer(initialState, (builder) => {
  builder
    .addCase(cityUpdated, (state, action) => {
      state.city = action.payload;
    });
});

export default app;
