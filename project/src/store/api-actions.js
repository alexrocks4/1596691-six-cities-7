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

export {
  fetchOffers
};
