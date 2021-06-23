import { CityName } from '../const';
import { ActionType } from './action';

const initialState = {
  filterCity: CityName.PARIS,
  offers: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_FILTER_CITY:
      return {
        ...state,
        filterCity: action.payload,
      };
    case ActionType.SET_OFFERS:
      return {
        ...state,
        offers: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
