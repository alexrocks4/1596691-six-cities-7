import { APIRoute } from '../const';
import { ActionCreator } from '../store/action';
import { adaptOffersFromServer, adaptAuthInfoFromServer } from '../utils/adapter';

const fetchOffers = () => (dispatch, _getState, api) => {
  dispatch(ActionCreator.offersFetchingStarted());

  return api
    .get(APIRoute.OFFERS)
    .then(({ data }) => {
      const adaptedOffers = adaptOffersFromServer(data);
      dispatch(ActionCreator.offersLoaded(adaptedOffers));
    });
};

const checkAuth = () => (dispatch, _getState, api) => (
  api.get(APIRoute.LOGIN)
    .then(({ data }) => dispatch(ActionCreator.loggedIn(adaptAuthInfoFromServer(data))))
    .catch(() => {})
);

const login = (credentials) => (dispatch, _getState, api) => (
  api.post(APIRoute.LOGIN, credentials)
    .then(({ data }) => {
      localStorage.setItem('token', data.token);
      return data;
    })
    .then((authInfo) => dispatch(ActionCreator.loggedIn(adaptAuthInfoFromServer(authInfo))))
    .then(() => dispatch(ActionCreator.redirectedToRoute(APIRoute.MAIN)))
);

export {
  fetchOffers,
  checkAuth,
  login
};
