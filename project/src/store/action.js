import { createAction } from '@reduxjs/toolkit';

const ActionType = {
  CITY_UPDATED: 'app/cityUpdated',
  OFFERS_FETCHING_STARTED: 'api/offers/fetchingStarted',
  OFFERS_LOADED: 'api/offers/loaded',
  LOGGED_IN: 'user/loggedIn',
  LOGGED_OUT: 'user/loggedOut',
  NOT_AUTHORIZED: 'user/notAuthorized',
  REDIRECTED_TO_ROUTE: 'app/redirectedToRoute',
};

const cityUpdated = createAction(ActionType.CITY_UPDATED);
const offersFetchingStarted = createAction(ActionType.OFFERS_FETCHING_STARTED);
const offersLoaded = createAction(ActionType.OFFERS_LOADED);
const loggedIn = createAction(ActionType.LOGGED_IN);
const loggedOut = createAction(ActionType.LOGGED_OUT);
const notAuthorized = createAction(ActionType.NOT_AUTHORIZED);
const redirectedToRoute = createAction(ActionType.REDIRECTED_TO_ROUTE);

export {
  cityUpdated,
  offersFetchingStarted,
  offersLoaded,
  loggedIn,
  loggedOut,
  notAuthorized,
  redirectedToRoute
};
