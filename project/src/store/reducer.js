import { CityName } from '../const';
import { ActionType } from './action';

const initialState = {
  city: CityName.PARIS,
  offers: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CITY_UPDATED:
      return {
        ...state,
        city: action.payload,
      };
    case ActionType.OFFERS_LOADED:
      return {
        ...state,
        offers: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
