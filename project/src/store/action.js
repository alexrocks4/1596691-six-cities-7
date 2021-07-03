import { AuthorizationStatus } from '../const';

const ActionType = {
  CITY_UPDATED: 'app/cityUpdated',
  OFFERS_FETCHING_STARTED: 'api/offers/fetchingStarted',
  OFFERS_LOADED: 'api/offers/loaded',
  LOGGED_IN: 'user/loggedIn',
  LOGGED_OUT: 'user/loggedOut',
};

const ActionCreator = {
  cityUpdated: (city) => ({
    type: ActionType.CITY_UPDATED,
    payload: city,
  }),
  offersFetchingStarted: () => ({
    type: ActionType.OFFERS_FETCHING_STARTED,
  }),
  offersLoaded: (offers) => ({
    type: ActionType.OFFERS_LOADED,
    payload: offers,
  }),
  loggedIn: () => ({
    type: ActionType.LOGGED_IN,
    payload: AuthorizationStatus.AUTH,
  }),
  loggedOut: () => ({
    type: ActionType.LOGGED_OUT,
    payload: AuthorizationStatus.NO_AUTH,
  }),
};

export { ActionType, ActionCreator };
