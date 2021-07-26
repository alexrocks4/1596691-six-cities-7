import * as ApiActions from './api-actions';
import { createAPI } from '../services/api';
import MockAdapter from 'axios-mock-adapter';
import { APIRoute, FavoriteStatus } from '../const';
import { ActionType } from './action';

const {
  fetchOffers,
  fetchNearbyOffers,
  fetchOffer,
  fetchReviews,
  fetchFavoriteOffers,
  createReview,
  updateFavoriteOfferStatus,
  setOfferAsFavorite,
  unsetOfferAsFavorite,
  checkAuth,
  login,
  logout,
} = ApiActions;

let dispatch;
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

  it('should correctly fetch nearby offers', () => {
    apiMock
      .onGet(APIRoute.OFFERS_NEARBY(1))
      .reply(200, []);

    const NearbyOffersLoader = fetchNearbyOffers(1);

    return NearbyOffersLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.OFFERS_NEARBY_FETCHING_STARTED,
          payload: undefined,
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.OFFERS_NEARBY_LOADED,
          payload: [],
        });
      });
  });

  describe('should correctly fetch offer', () => {
    it('should correctly behave on successfull response', () => {
      apiMock
        .onGet(APIRoute.OFFER(1))
        .reply(200, {});

      const offerLoader = fetchOffer(1);

      return offerLoader(dispatch, () => {}, api)
        .then(() => {
          expect(dispatch).toHaveBeenCalledTimes(2);
          expect(dispatch).toHaveBeenNthCalledWith(1, {
            type: ActionType.OFFER_FETCHING_STARTED,
            payload: undefined,
          });
          expect(dispatch).toHaveBeenNthCalledWith(2, {
            type: ActionType.OFFER_LOADED,
            payload: {},
          });
        });
    });

    it('should correctly behave on rejected response', () => {
      apiMock
        .onGet(APIRoute.OFFER(1))
        .reply(404);

      const offerLoader = fetchOffer(1);

      return  expect(
        offerLoader(dispatch, () => {}, api)
          .finally(() => {
            expect(dispatch).toHaveBeenCalledTimes(2);
            expect(dispatch).toHaveBeenNthCalledWith(1, {
              type: ActionType.OFFER_FETCHING_STARTED,
              payload: undefined,
            });
            expect(dispatch).toHaveBeenNthCalledWith(2, {
              type: ActionType.OFFER_FETCHING_FAILED,
              payload: expect.objectContaining({
                status: 404,
              }),
            });
          }))
        .rejects.toThrow(expect.objectContaining({
          response: expect.objectContaining({ status: 404 }),
        }));
    });
  });

  describe('should correctly fetch reviews', () => {
    it('should correctly behave on successfull response', () => {
      apiMock
        .onGet(APIRoute.REVIEWS(1))
        .reply(200, []);

      const reviewsLoader = fetchReviews(1);

      return reviewsLoader(dispatch, () => {}, api)
        .then(() => {
          expect(dispatch).toHaveBeenCalledTimes(2);
          expect(dispatch).toHaveBeenNthCalledWith(1, {
            type: ActionType.REVIEWS_FETCHING_STARTED,
            payload: undefined,
          });
          expect(dispatch).toHaveBeenNthCalledWith(2, {
            type: ActionType.REVIEWS_LOADED,
            payload: [],
          });
        });
    });

    it('should correctly behave on rejected response', () => {
      apiMock
        .onGet(APIRoute.REVIEWS(1))
        .reply(404);

      const reviewsLoader = fetchReviews(1);

      return  expect(
        reviewsLoader(dispatch, () => {}, api)
          .finally(() => {
            expect(dispatch).toHaveBeenCalledTimes(2);
            expect(dispatch).toHaveBeenNthCalledWith(1, {
              type: ActionType.REVIEWS_FETCHING_STARTED,
              payload: undefined,
            });
            expect(dispatch).toHaveBeenNthCalledWith(2, {
              type: ActionType.REVIEWS_FETCHING_FAILED,
              payload: expect.objectContaining({
                status: 404,
              }),
            });
          }))
        .rejects.toThrow(expect.objectContaining({
          response: expect.objectContaining({ status: 404 }),
        }));
    });
  });

  describe('should correctly fetch favorite offers', () => {
    it('should correctly behave on successfull response', () => {
      apiMock
        .onGet(APIRoute.FAVORITE)
        .reply(200, []);

      const favoriteOffersLoader = fetchFavoriteOffers();

      return favoriteOffersLoader(dispatch, () => {}, api)
        .then(() => {
          expect(dispatch).toHaveBeenCalledTimes(2);
          expect(dispatch).toHaveBeenNthCalledWith(1, {
            type: ActionType.FAVORITE_OFFERS_FETCHING_STARTED,
            payload: undefined,
          });
          expect(dispatch).toHaveBeenNthCalledWith(2, {
            type: ActionType.FAVORITE_OFFERS_LOADED,
            payload: [],
          });
        });
    });

    it('should correctly behave on rejected response', () => {
      apiMock
        .onGet(APIRoute.FAVORITE)
        .reply(404);

      const favoriteOffersLoader = fetchFavoriteOffers();

      return  expect(
        favoriteOffersLoader(dispatch, () => {}, api)
          .finally(() => {
            expect(dispatch).toHaveBeenCalledTimes(2);
            expect(dispatch).toHaveBeenNthCalledWith(1, {
              type: ActionType.FAVORITE_OFFERS_FETCHING_STARTED,
              payload: undefined,
            });
            expect(dispatch).toHaveBeenNthCalledWith(2, {
              type: ActionType.FAVORITE_OFFERS_FETCHING_FAILED,
              payload: expect.objectContaining({
                status: 404,
              }),
            });
          }))
        .rejects.toThrow(expect.objectContaining({
          response: expect.objectContaining({ status: 404 }),
        }));
    });
  });

  describe('should correctly create review', () => {
    it('should correctly behave on successfull response', () => {
      apiMock
        .onPost(APIRoute.REVIEWS(1), {})
        .reply(200, []);

      const reviewCreator = createReview({ offerId: 1, review: {} });

      return reviewCreator(dispatch, () => {}, api)
        .then(() => {
          expect(dispatch).toHaveBeenCalledTimes(2);
          expect(dispatch).toHaveBeenNthCalledWith(1, {
            type: ActionType.REVIEW_CREATION_STARTED,
            payload: undefined,
          });
          expect(dispatch).toHaveBeenNthCalledWith(2, {
            type: ActionType.REVIEW_CREATED,
            payload: [],
          });
        });
    });

    it('should correctly behave on rejected response', () => {
      apiMock
        .onPost(APIRoute.REVIEWS(1), {})
        .reply(404);

      const reviewCreator = createReview({ offerId: 1, review: {} });

      return  expect(
        reviewCreator(dispatch, () => {}, api)
          .finally(() => {
            expect(dispatch).toHaveBeenCalledTimes(2);
            expect(dispatch).toHaveBeenNthCalledWith(1, {
              type: ActionType.REVIEW_CREATION_STARTED,
              payload: undefined,
            });
            expect(dispatch).toHaveBeenNthCalledWith(2, {
              type: ActionType.REVIEW_CREATION_FAILED,
              payload: expect.objectContaining({
                status: 404,
              }),
            });
          }))
        .rejects.toThrow(expect.objectContaining({
          response: expect.objectContaining({ status: 404 }),
        }));
    });
  });

  describe('should correctly update favorite offer status', () => {
    it('should correctly behave on successfull response', () => {
      const offerId = 1;
      const status = 1;
      const action = jest.fn();

      apiMock
        .onPost(APIRoute.FAVORITE_STATUS(offerId, status))
        .reply(200, {});

      const statusUpdater = updateFavoriteOfferStatus(offerId, status, action);

      return statusUpdater(dispatch, () => {}, api)
        .then(() => {
          expect(dispatch).toHaveBeenCalledTimes(3);
          expect(dispatch).toHaveBeenNthCalledWith(1, {
            type: ActionType.FAVORITE_OFFER_STATUS_UPDATING_STARTED,
            payload: undefined,
          });
          expect(dispatch).toHaveBeenNthCalledWith(3, {
            type: ActionType.FAVORITE_OFFER_STATUS_UPDATED,
          });
          expect(action).toHaveBeenCalledTimes(1);
        });
    });

    it('should correctly behave on rejected response', () => {
      const offerId = 1;
      const status = 1;
      const action = jest.fn();

      apiMock
        .onPost(APIRoute.FAVORITE_STATUS(offerId, status))
        .reply(404, {});

      const statusUpdater = updateFavoriteOfferStatus(offerId, status, action);

      return  expect(
        statusUpdater(dispatch, () => {}, api)
          .finally(() => {
            expect(dispatch).toHaveBeenCalledTimes(2);
            expect(dispatch).toHaveBeenNthCalledWith(1, {
              type: ActionType.FAVORITE_OFFER_STATUS_UPDATING_STARTED,
              payload: undefined,
            });
            expect(dispatch).toHaveBeenNthCalledWith(2, {
              type: ActionType.FAVORITE_OFFER_STATUS_UPDATING_FAILED,
              payload: expect.objectContaining({
                status: 404,
              }),
            });
          }))
        .rejects.toThrow(expect.objectContaining({
          response: expect.objectContaining({ status: 404 }),
        }));
    });
  });

  it('should correctly set offer as favorite', () => {
    const spy = jest.spyOn(ApiActions, 'updateFavoriteOfferStatus').mockImplementation(jest.fn(() => ({ fake: true })));

    const offerId = 1;
    const action = jest.fn();

    setOfferAsFavorite(offerId, action)(dispatch);
    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenNthCalledWith(1, offerId, FavoriteStatus.ACTIVE, action);
    expect(dispatch).toHaveBeenCalledTimes(1);
    expect(dispatch).toHaveBeenNthCalledWith(1, { fake: true });
  });

  it('should correctly unset offer as favorite', () => {
    const spy = jest.spyOn(ApiActions, 'updateFavoriteOfferStatus').mockImplementation(jest.fn(() => ({ fake: true })));

    const offerId = 1;
    const action = jest.fn();

    unsetOfferAsFavorite(offerId, action)(dispatch);
    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenNthCalledWith(1, offerId, FavoriteStatus.INACTIVE, action);
    expect(dispatch).toHaveBeenCalledTimes(1);
    expect(dispatch).toHaveBeenNthCalledWith(1, { fake: true });
  });

  it('should correctly check authorization', () => {
    apiMock
      .onGet(APIRoute.LOGIN)
      .reply(200, { fake: true });

    const authChecker = checkAuth();

    return authChecker(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOGGED_IN,
          payload: { fake: true },
        });
      });
  });

  it('should correctly process login attempt', () => {
    const token = 'xyz';

    Storage.prototype.setItem = jest.fn();

    apiMock
      .onPost(APIRoute.LOGIN)
      .reply(200, { token: token });

    const loginLoader = login({ email: 'test@test.com', password: '1234' });

    return loginLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOGGED_IN,
          payload: { token: token },
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.REDIRECTED_TO_ROUTE,
          payload: APIRoute.MAIN,
        });
        expect(Storage.prototype.setItem).toHaveBeenCalledTimes(1);
        expect(Storage.prototype.setItem).toHaveBeenNthCalledWith(1, 'token', token );
        expect(api.defaults.headers.common['X-Token']).toBe(token);
      });
  });

  it('should correctly process logout attempt', () => {
    Storage.prototype.removeItem = jest.fn();

    apiMock
      .onDelete(APIRoute.LOGOUT)
      .reply(204);

    const logoutLoader = logout();

    return logoutLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOGGED_OUT,
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.REDIRECTED_TO_ROUTE,
          payload: APIRoute.MAIN,
        });
        expect(Storage.prototype.removeItem).toHaveBeenCalledTimes(1);
        expect(Storage.prototype.removeItem).toHaveBeenNthCalledWith(1, 'token');
        expect(api.defaults.headers.common['X-Token']).toBeNull();
      });
  });
});
