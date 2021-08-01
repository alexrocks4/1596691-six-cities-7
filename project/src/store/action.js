import { createAction } from '@reduxjs/toolkit';

const ActionType = {
  CITY_UPDATED: 'app/cityUpdated',
  SORTING_TYPE_UPDATED: 'app/sortingTypeUpdated',
  OFFERS_FETCHING_STARTED: 'api/offers/fetchingStarted',
  OFFERS_LOADED: 'api/offers/loaded',
  OFFERS_UPDATED: 'api/offers/updated',
  OFFERS_CLEARED: 'api/offers/cleared',
  OFFERS_NEARBY_FETCHING_STARTED: 'api/offersNearby/fetchingStarted',
  OFFERS_NEARBY_LOADED: 'api/offersNearby/loaded',
  OFFERS_NEARBY_UPDATED: 'api/offersNearby/updated',
  OFFER_FETCHING_STARTED: 'api/offer/fetchingStarted',
  OFFER_FETCHING_FAILED: 'api/offer/fetchingFailed',
  OFFER_LOADED: 'api/offer/loaded',
  OFFER_UPDATED: 'api/offer/updated',
  FAVORITE_OFFERS_FETCHING_STARTED: 'api/favoriteOffers/fetchingStarted',
  FAVORITE_OFFERS_FETCHING_FAILED: 'api/favoriteOffers/fetchingFailed',
  FAVORITE_OFFERS_LOADED: 'api/favoriteOffers/loaded',
  FAVORITE_OFFERS_UPDATED: 'api/favoriteOffers/updated',
  FAVORITE_OFFERS_CLEARED: 'api/favoriteOffers/cleared',
  FAVORITE_OFFERS_DELETED: 'api/favoriteOffers/deleted',
  REVIEWS_FETCHING_STARTED: 'api/reviews/fetchingStarted',
  REVIEWS_FETCHING_FAILED: 'api/reviews/fetchingFailed',
  REVIEWS_LOADED: 'api/reviews/loaded',
  REVIEW_CREATION_STARTED: 'api/review/creationStarted',
  REVIEW_CREATION_FAILED: 'api/review/creationFailed',
  REVIEW_CREATED: 'api/review/created',
  FAVORITE_OFFER_STATUS_UPDATING_STARTED: 'api/favoriteOfferStatus/updatingStarted',
  FAVORITE_OFFER_STATUS_UPDATING_FAILED: 'api/favoriteOfferStatus/updatingFailed',
  FAVORITE_OFFER_STATUS_UPDATED: 'api/favoriteOfferStatus/updated',
  SERVER_STATUS_UPDATED: 'api/serverStatus/updated',
  LOGGED_IN: 'user/loggedIn',
  LOGGED_OUT: 'user/loggedOut',
  NOT_AUTHORIZED: 'user/notAuthorized',
  REDIRECTED_TO_ROUTE: 'app/redirectedToRoute',
};

const cityUpdated = createAction(ActionType.CITY_UPDATED);
const sortingTypeUpdated = createAction(ActionType.SORTING_TYPE_UPDATED);
const offersFetchingStarted = createAction(ActionType.OFFERS_FETCHING_STARTED);
const offersLoaded = createAction(ActionType.OFFERS_LOADED);
const offersUpdated = createAction(ActionType.OFFERS_UPDATED);
const offersCleared = createAction(ActionType.OFFERS_CLEARED);
const offersNearbyFetchingStarted = createAction(ActionType.OFFERS_NEARBY_FETCHING_STARTED);
const offersNearbyLoaded = createAction(ActionType.OFFERS_NEARBY_LOADED);
const offersNearbyUpdated = createAction(ActionType.OFFERS_NEARBY_UPDATED);
const offerFetchingStarted = createAction(ActionType.OFFER_FETCHING_STARTED);
const offerFetchingFailed = createAction(ActionType.OFFER_FETCHING_FAILED);
const offerLoaded = createAction(ActionType.OFFER_LOADED);
const offerUpdated= createAction(ActionType.OFFER_UPDATED);
const favoriteOffersFetchingStarted = createAction(ActionType.FAVORITE_OFFERS_FETCHING_STARTED);
const favoriteOffersFetchingFailed = createAction(ActionType.FAVORITE_OFFERS_FETCHING_FAILED);
const favoriteOffersLoaded = createAction(ActionType.FAVORITE_OFFERS_LOADED);
const favoriteOffersUpdated= createAction(ActionType.FAVORITE_OFFERS_UPDATED);
const favoriteOffersCleared= createAction(ActionType.FAVORITE_OFFERS_CLEARED);
const favoriteOffersDeleted= createAction(ActionType.FAVORITE_OFFERS_DELETED);
const reviewsFetchingStarted = createAction(ActionType.REVIEWS_FETCHING_STARTED);
const reviewsFetchingFailed = createAction(ActionType.REVIEWS_FETCHING_FAILED);
const reviewsLoaded = createAction(ActionType.REVIEWS_LOADED);
const reviewCreationStarted = createAction(ActionType.REVIEW_CREATION_STARTED);
const reviewCreationFailed = createAction(ActionType.REVIEW_CREATION_FAILED);
const reviewCreated = createAction(ActionType.REVIEW_CREATED);
const favoriteOfferStatusUpdatingStarted = createAction(ActionType.FAVORITE_OFFER_STATUS_UPDATING_STARTED);
const favoriteOfferStatusUpdatingFailed = createAction(ActionType.FAVORITE_OFFER_STATUS_UPDATING_FAILED);
const favoriteOfferStatusUpdated = createAction(ActionType.FAVORITE_OFFER_STATUS_UPDATED);
const serverStatusUpdated = createAction(ActionType.SERVER_STATUS_UPDATED);
const loggedIn = createAction(ActionType.LOGGED_IN);
const loggedOut = createAction(ActionType.LOGGED_OUT);
const notAuthorized = createAction(ActionType.NOT_AUTHORIZED);
const redirectedToRoute = createAction(ActionType.REDIRECTED_TO_ROUTE);
const updateOffers = (offer) => (dispatch) => dispatch(offersUpdated(offer));
const updateOffer = (offer) => (dispatch) => dispatch(offerUpdated(offer));
const updateOffersNearby = (offer) => (dispatch) => dispatch(offersNearbyUpdated(offer));
const updateFavoriteOffers = (offer) => (dispatch) => dispatch(favoriteOffersUpdated(offer));
const deleteFavoriteOffers = (offer) => (dispatch) => dispatch(favoriteOffersDeleted(offer));

export {
  ActionType,
  cityUpdated,
  sortingTypeUpdated,
  offersFetchingStarted,
  offersLoaded,
  offersUpdated,
  offersCleared,
  loggedIn,
  loggedOut,
  notAuthorized,
  redirectedToRoute,
  offersNearbyFetchingStarted,
  offersNearbyLoaded,
  offersNearbyUpdated,
  offerFetchingStarted,
  offerFetchingFailed,
  offerLoaded,
  offerUpdated,
  favoriteOffersFetchingStarted,
  favoriteOffersFetchingFailed,
  favoriteOffersLoaded,
  favoriteOffersUpdated,
  favoriteOffersCleared,
  favoriteOffersDeleted,
  reviewsFetchingStarted,
  reviewsFetchingFailed,
  reviewsLoaded,
  reviewCreationStarted,
  reviewCreationFailed,
  reviewCreated,
  favoriteOfferStatusUpdatingStarted,
  favoriteOfferStatusUpdatingFailed,
  favoriteOfferStatusUpdated,
  serverStatusUpdated,
  updateOffers,
  updateOffer,
  updateOffersNearby,
  updateFavoriteOffers,
  deleteFavoriteOffers
};
