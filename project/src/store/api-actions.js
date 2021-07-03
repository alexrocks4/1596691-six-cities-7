import { APIRoute } from '../const';
import { ActionCreator } from '../store/action';
import { adaptOffersFromServer } from '../utils/adapter';

const fetchOffers = () => (dispatch, _getState, api) => {
  dispatch(ActionCreator.offersFetchingStarted());

  setTimeout(() => (api
    .get(APIRoute.OFFERS)
    .then(({ data }) => {
      const adaptedOffers = adaptOffersFromServer(data);
      dispatch(ActionCreator.offersLoaded(adaptedOffers));
    })), 5000);
  // return api
  //   .get(APIRoute.OFFERS)
  //   .then(({ data }) => {
  //     const adaptedOffers = adaptOffersFromServer(data);
  //     dispatch(ActionCreator.offersLoaded(adaptedOffers));
  //   });
};

export {
  fetchOffers
};
