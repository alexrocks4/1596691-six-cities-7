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
  favoriteOffersFetchingStarted,
  loggedOut
} from '../store/action';
import {
  adaptOffersFromServer,
  adaptOfferFromServer,
  adaptAuthInfoFromServer,
  adaptReviewsFromServer
} from '../utils/adapter';
import { batch } from 'react-redux';
import { onAPIError } from '../utils/util';

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
    .catch(onAPIError.bind(null, {
      onResponse: (response) => dispatch(offerFetchingFailed(response)),
    }));
};

const fetchReviews = (offerId) => (dispatch, _getState, api) => {
  dispatch(reviewsFetchingStarted());

  return api
    .get(APIRoute.REVIEWS(offerId))
    .then(({ data }) => {
      const adaptedReviews = adaptReviewsFromServer(data);
      dispatch(reviewsLoaded(adaptedReviews));
    })
    .catch(onAPIError.bind(null, {
      onResponse: (response) => dispatch(reviewsFetchingFailed(response)),
    }));
};

const fetchFavoriteOffers = () => (dispatch, _getState, api) => {
  dispatch(favoriteOffersFetchingStarted());

  return api
    .get(APIRoute.FAVORITE)
    .then(({ data }) => {
      const adaptedOffers = adaptOffersFromServer(data);
      dispatch(favoriteOffersLoaded(adaptedOffers));
    })
    .catch(onAPIError.bind(null, {
      onResponse: (response) => dispatch(favoriteOffersFetchingFailed(response)),
    }));
};

const createReview = ({ offerId, review }) => (dispatch, _getState, api) => {
  dispatch(reviewCreationStarted());

  return api
    .post(APIRoute.REVIEWS(offerId), review)
    .then(({ data }) => {
      const adaptedReviews = adaptReviewsFromServer(data);
      dispatch(reviewCreated(adaptedReviews));
    })
    .catch(onAPIError.bind(null, {
      onResponse: (response) => dispatch(reviewCreationFailed(response)),
    }));
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
    .catch(onAPIError.bind(null, {
      onResponse: (response) => dispatch(favoriteOfferStatusUpdatingFailed(response)),
    }));
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
      api.defaults.headers.common['X-Token'] = data.token;
      return data;
    })
    .then((authInfo) => dispatch(loggedIn(adaptAuthInfoFromServer(authInfo))))
    .then(() => dispatch(redirectedToRoute(APIRoute.MAIN)))
);

const logout = () => (dispatch, _getState, api) => (
  api.delete(APIRoute.LOGOUT)
    .then(() => {
      localStorage.removeItem('token');
      api.defaults.headers.common['X-Token'] = null;
      batch(() => {
        dispatch(loggedOut());
        dispatch(redirectedToRoute(APIRoute.MAIN));
      });
    })
);

export {
  fetchOffers,
  fetchOffer,
  fetchNearbyOffers,
  fetchReviews,
  fetchFavoriteOffers,
  checkAuth,
  login,
  logout,
  createReview,
  setOfferAsFavorite,
  unsetOfferAsFavorite
};
