import { APIRoute } from '../const';
import { ActionCreator } from '../store/action';
import { adaptOffersFromServer } from '../utils/adapter';

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
    .then(() => dispatch(ActionCreator.loggedIn()))
    .catch(() => {})
);

export {
  fetchOffers,
  checkAuth
};
