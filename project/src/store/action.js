const ActionType = {
  CITY_UPDATED: 'app/cityUpdated',
  OFFERS_FETCHING_STARTED: 'api/offers/fetchingStarted',
  OFFERS_LOADED: 'api/offers/loaded',
  LOGGED_IN: 'user/loggedIn',
  LOGGED_OUT: 'user/loggedOut',
  NOT_AUTHORIZED: 'user/notAuthorized',
  REDIRECTED_TO_ROUTE: 'app/redirectedToRoute',
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
  }),
  loggedOut: () => ({
    type: ActionType.LOGGED_OUT,
  }),
  notAuthorized: () => ({
    type: ActionType.NOT_AUTHORIZED,
  }),
  redirectedToRoute: (url) => ({
    type: ActionType.REDIRECTED_TO_ROUTE,
    payload: url,
  }),
};

export { ActionType, ActionCreator };
