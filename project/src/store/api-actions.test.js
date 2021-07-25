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
  loggedOut,
  fetchOffers
} from './api-actions';
import { createAPI } from '../services/api';
import MockAdapter from 'axios-mock-adapter';
import { APIRoute } from '../const';
import { ActionType } from './action';

let dispatch;
let getState;
let api;
let apiMock;

describe('Api actions', () => {
  beforeAll(() => {
    api = createAPI(() => {});
  });

  beforeEach(() => {
    dispatch = jest.fn();
    apiMock = new MockAdapter(api);
  });

  it('should correctly fetch offers', () => {
    apiMock
      .onGet(APIRoute.OFFERS)
      .reply(200, []);

    const offersLoader = fetchOffers();

    return offersLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.OFFERS_FETCHING_STARTED,
          payload: undefined,
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.OFFERS_LOADED,
          payload: [],
        });
      });
  });
});
