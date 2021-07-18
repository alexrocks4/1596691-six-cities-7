import { createAction } from '@reduxjs/toolkit';

const ActionType = {
  CITY_UPDATED: 'app/cityUpdated',
  SORTING_TYPE_UPDATED: 'app/sortingTypeUpdated',
  OFFERS_FETCHING_STARTED: 'api/offers/fetchingStarted',
  OFFERS_LOADED: 'api/offers/loaded',
  OFFERS_NEARBY_FETCHING_STARTED: 'api/offersNearby/fetchingStarted',
  OFFERS_NEARBY_LOADED: 'api/offersNearby/loaded',
  OFFER_FETCHING_STARTED: 'api/offer/fetchingStarted',
  OFFER_FETCHING_FAILED: 'api/offer/fetchingFailed',
  OFFER_LOADED: 'api/offer/loaded',
  REVIEWS_FETCHING_STARTED: 'api/reviews/fetchingStarted',
  REVIEWS_FETCHING_FAILED: 'api/reviews/fetchingFailed',
  REVIEWS_LOADED: 'api/reviews/loaded',
  LOGGED_IN: 'user/loggedIn',
  LOGGED_OUT: 'user/loggedOut',
  NOT_AUTHORIZED: 'user/notAuthorized',
  REDIRECTED_TO_ROUTE: 'app/redirectedToRoute',
};

const cityUpdated = createAction(ActionType.CITY_UPDATED);
const sortingTypeUpdated = createAction(ActionType.SORTING_TYPE_UPDATED);
const offersFetchingStarted = createAction(ActionType.OFFERS_FETCHING_STARTED);
const offersLoaded = createAction(ActionType.OFFERS_LOADED);
const offersNearbyFetchingStarted = createAction(ActionType.OFFERS_NEARBY_FETCHING_STARTED);
const offersNearbyLoaded = createAction(ActionType.OFFERS_NEARBY_LOADED);
const offerFetchingStarted = createAction(ActionType.OFFER_FETCHING_STARTED);
const offerFetchingFailed = createAction(ActionType.OFFER_FETCHING_FAILED);
const offerLoaded = createAction(ActionType.OFFER_LOADED);
const reviewsFetchingStarted = createAction(ActionType.REVIEWS_FETCHING_STARTED);
const reviewsFetchingFailed = createAction(ActionType.REVIEWS_FETCHING_FAILED);
const reviewsLoaded = createAction(ActionType.REVIEWS_LOADED);
const loggedIn = createAction(ActionType.LOGGED_IN);
const loggedOut = createAction(ActionType.LOGGED_OUT);
const notAuthorized = createAction(ActionType.NOT_AUTHORIZED);
const redirectedToRoute = createAction(ActionType.REDIRECTED_TO_ROUTE);

export {
  cityUpdated,
  sortingTypeUpdated,
  offersFetchingStarted,
  offersLoaded,
  loggedIn,
  loggedOut,
  notAuthorized,
  redirectedToRoute,
  offersNearbyFetchingStarted,
  offersNearbyLoaded,
  offerFetchingStarted,
  offerFetchingFailed,
  offerLoaded,
  reviewsFetchingStarted,
  reviewsFetchingFailed,
  reviewsLoaded
};
