import { createReducer } from '@reduxjs/toolkit';
import { cityUpdated, sortingTypeUpdated } from '../action';
import { CityName, SortingType } from '../../const';

const initialState = {
  city: CityName.PARIS,
  sortingType: SortingType.POPULAR,
};

const app = createReducer(initialState, (builder) => {
  builder
    .addCase(cityUpdated, (state, action) => {
      state.city = action.payload;
    })
    .addCase(sortingTypeUpdated, (state, action) => {
      state.sortingType = action.payload;
    });
});

export default app;
