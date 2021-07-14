import { APIRoute } from '../const';
import {
  offersFetchingStarted,
  offersLoaded,
  offersNearbyFetchingStarted,
  offersNearbyLoaded,
  loggedIn,
  redirectedToRoute
} from '../store/action';
import { adaptOffersFromServer, adaptAuthInfoFromServer } from '../utils/adapter';

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
  fetchNearbyOffers,
  checkAuth,
  login
};
