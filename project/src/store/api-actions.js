import { APIRoute } from '../const';
import {
  offersFetchingStarted,
  offersLoaded,
  offersNearbyFetchingStarted,
  offersNearbyLoaded,
  loggedIn,
  redirectedToRoute,
  offerFetchingStarted,
  offerLoaded,
  offerFetchingFailed,
  reviewsFetchingStarted,
  reviewsLoaded,
  reviewsFetchingFailed,
  reviewCreationStarted,
  reviewCreationFailed,
  reviewCreated,
  favoriteOfferStatusUpdatingStarted,
  favoriteOfferStatusUpdated,
  favoriteOfferStatusUpdatingFailed,
  favoriteOffersLoaded,
  favoriteOffersFetchingFailed,
  favoriteOffersFetchingStarted
} from '../store/action';
import {
  adaptOffersFromServer,
  adaptOfferFromServer,
  adaptAuthInfoFromServer,
  adaptReviewsFromServer
} from '../utils/adapter';

const FavoriteStatus = {
  ACTIVE: 1,
  INACTIVE: 0,
};

const fetchOffers = () => (dispatch, _getState, api) => {
  dispatch(offersFetchingStarted());

  return api
    .get(APIRoute.OFFERS)
    .then(({ data }) => {
      const adaptedOffers = adaptOffersFromServer(data);
      dispatch(offersLoaded(adaptedOffers));
    });
};

const fetchNearbyOffers = (offerId) => (dispatch, _getState, api) => {
  dispatch(offersNearbyFetchingStarted());

  return api
    .get(APIRoute.OFFERS_NEARBY(offerId))
    .then(({ data }) => {
      const adaptedOffers = adaptOffersFromServer(data);
      dispatch(offersNearbyLoaded(adaptedOffers));
    });
};

const fetchOffer = (offerId) => (dispatch, _getState, api) => {
  dispatch(offerFetchingStarted());

  return api
    .get(APIRoute.OFFER(offerId))
    .then(({ data }) => {
      const adaptedOffer = adaptOfferFromServer(data);
      dispatch(offerLoaded(adaptedOffer));
    })
    .catch((error) => dispatch(offerFetchingFailed(error)));
};

const fetchReviews = (offerId) => (dispatch, _getState, api) => {
  dispatch(reviewsFetchingStarted());

  return api
    .get(APIRoute.REVIEWS(offerId))
    .then(({ data }) => {
      const adaptedReviews = adaptReviewsFromServer(data);
      dispatch(reviewsLoaded(adaptedReviews));
    })
    .catch((error) => dispatch(reviewsFetchingFailed(error)));
};

const fetchFavoriteOffers = () => (dispatch, _getState, api) => {
  dispatch(favoriteOffersFetchingStarted());

  return api
    .get(APIRoute.FAVORITE)
    .then(({ data }) => {
      const adaptedOffers = adaptOffersFromServer(data);
      dispatch(favoriteOffersLoaded(adaptedOffers));
    })
    .catch((error) => dispatch(favoriteOffersFetchingFailed(error)));
};

const createReview = ({ offerId, review }) => (dispatch, _getState, api) => {
  dispatch(reviewCreationStarted());

  return api
    .post(APIRoute.REVIEWS(offerId), review)
    .then(({ data }) => {
      const adaptedReviews = adaptReviewsFromServer(data);
      dispatch(reviewCreated(adaptedReviews));
    })
    .catch((error) => dispatch(reviewCreationFailed(error)));
};

const updateFavoriteOfferStatus = (offerId, status, action) => (dispatch, _getState, api) => {
  dispatch(favoriteOfferStatusUpdatingStarted());

  return api
    .post(APIRoute.FAVORITE_STATUS(offerId, status))
    .then(({ data }) => {
      const adaptedOffer = adaptOfferFromServer(data);
      dispatch(action(adaptedOffer));
      dispatch(favoriteOfferStatusUpdated());
    })
    .catch((error) => dispatch(favoriteOfferStatusUpdatingFailed(error)));
};

const setOfferAsFavorite = (offerId, action) => (dispatch) => (
  dispatch(updateFavoriteOfferStatus(offerId, FavoriteStatus.ACTIVE, action))
);

const unsetOfferAsFavorite = (offerId, action) => (dispatch) => (
  dispatch(updateFavoriteOfferStatus(offerId, FavoriteStatus.INACTIVE, action))
);

const checkAuth = () => (dispatch, _getState, api) => (
  api.get(APIRoute.LOGIN)
    .then(({ data }) => dispatch(loggedIn(adaptAuthInfoFromServer(data))))
    .catch(() => {})
);

const login = (credentials) => (dispatch, _getState, api) => (
  api.post(APIRoute.LOGIN, credentials)
    .then(({ data }) => {
      localStorage.setItem('token', data.token);
      return data;
    })
    .then((authInfo) => dispatch(loggedIn(adaptAuthInfoFromServer(authInfo))))
    .then(() => dispatch(redirectedToRoute(APIRoute.MAIN)))
);

export {
  fetchOffers,
  fetchOffer,
  fetchNearbyOffers,
  fetchReviews,
  fetchFavoriteOffers,
  checkAuth,
  login,
  createReview,
  setOfferAsFavorite,
  unsetOfferAsFavorite
};
