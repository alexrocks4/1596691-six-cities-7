import { CityName, APIResourceStatus, AuthorizationStatus } from '../const';
import { ActionType } from './action';

const initialState = {
  city: CityName.PARIS,
  offers: {
    data: [],
    status: APIResourceStatus.IDLE,
    error: null,
  },
  authorizationStatus: AuthorizationStatus.UNKNOWN,
  authorizationInfo: null,
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
        offers: {
          ...state.offers,
          data: action.payload,
          status: APIResourceStatus.SUCCEEDED,
        },
      };
    case ActionType.OFFERS_FETCHING_STARTED:
      return {
        ...state,
        offers: {
          ...state.offers,
          status: APIResourceStatus.LOADING,
        },
      };
    case ActionType.LOGGED_IN:
      return {
        ...state,
        authorizationStatus: AuthorizationStatus.AUTH,
        authorizationInfo: action.payload,
      };
    case ActionType.LOGGED_OUT:
      return {
        ...state,
        authorizationStatus: AuthorizationStatus.NO_AUTH,
      };
    case ActionType.NOT_AUTHORIZED:
      return {
        ...state,
        authorizationStatus: AuthorizationStatus.NO_AUTH,
      };
    default:
      return state;
  }
};

export default reducer;
