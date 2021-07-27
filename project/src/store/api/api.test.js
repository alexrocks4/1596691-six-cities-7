import { APIResourceStatus, ServerStatus } from '../../const';
import { ActionType } from '../action';
import api from './api';

const geInitialDataState = (data = []) => ({
  data,
  status: APIResourceStatus.IDLE,
  error: {
    data: '',
    status: 0,
    statusText: '',
  },
});

describe('Api reducer', () => {
  it('should return initial state without state and unknown type arguments', () => {
    const initialState = {
      offers: geInitialDataState(),
      offersNearby: geInitialDataState(),
      offer: geInitialDataState({}),
      reviews: geInitialDataState(),
      favoriteOffers: geInitialDataState(),
      createReviewRequest: geInitialDataState(null),
      updateFavoriteOfferStatusRequest: geInitialDataState(null),
      serverStatus: ServerStatus.IDLE,
    };

    expect(api(undefined, {})).toStrictEqual(initialState);
  });

  describe('Resources Started action', () => {
    test.each([
      [
        'offers',
        ActionType.OFFERS_FETCHING_STARTED,
      ],
      [
        'offersNearby',
        ActionType.OFFERS_NEARBY_FETCHING_STARTED,
      ],
      [
        'offer',
        ActionType.OFFER_FETCHING_STARTED,
      ],
      [
        'favoriteOffers',
        ActionType.FAVORITE_OFFERS_FETCHING_STARTED,
      ],
      [
        'reviews',
        ActionType.REVIEWS_FETCHING_STARTED,
      ],
      [
        'createReviewRequest',
        ActionType.REVIEW_CREATION_STARTED,
      ],
      [
        'updateFavoriteOfferStatusRequest',
        ActionType.FAVORITE_OFFER_STATUS_UPDATING_STARTED,
      ],
    ])('should correctly update %s state on %s action', (resource, action) => {
      const state = {
        [resource]: {
          status: APIResourceStatus.IDLE,
        },
      };

      expect(api(state,  { type: action })).toStrictEqual({
        [resource]: {
          status: APIResourceStatus.IN_PROGRESS,
        },
      });
    });
  });

  describe('Resources Loaded action', () => {
    test.each([
      [
        'offers',
        ActionType.OFFERS_LOADED,
        {
          type: ActionType.OFFERS_LOADED,
          payload: [{fake: true}],
        },
      ],
      [
        'offersNearby',
        ActionType.OFFERS_NEARBY_LOADED,
        {
          type: ActionType.OFFERS_NEARBY_LOADED,
          payload: [{fake: true}],
        },
      ],
      [
        'offer',
        ActionType.OFFER_LOADED,
        {
          type: ActionType.OFFER_LOADED,
          payload: {fake: true},
        },
      ],
      [
        'favoriteOffers',
        ActionType.FAVORITE_OFFERS_LOADED,
        {
          type: ActionType.FAVORITE_OFFERS_LOADED,
          payload: [{fake: true}],
        },
      ],
      [
        'reviews',
        ActionType.REVIEWS_LOADED,
        {
          type: ActionType.REVIEWS_LOADED,
          payload: [{fake: true}],
        },
      ],
    ])('should correctly update %s state on %s action', (resource, _actionName, action) => {
      const state = {
        [resource]: {
          data: [],
          status: APIResourceStatus.IDLE,
        },
      };

      expect(api(state,  action)).toStrictEqual({
        [resource]: {
          data: action.payload,
          status: APIResourceStatus.SUCCEEDED,
        },
      });
    });
  });

  describe('Resources Failed action', () => {
    test.each([
      [
        'offer',
        ActionType.OFFER_FETCHING_FAILED,
      ],
      [
        'favoriteOffers',
        ActionType.FAVORITE_OFFERS_FETCHING_FAILED,
      ],
      [
        'reviews',
        ActionType.REVIEWS_FETCHING_FAILED,
      ],
      [
        'createReviewRequest',
        ActionType.REVIEW_CREATION_FAILED,
      ],
      [
        'updateFavoriteOfferStatusRequest',
        ActionType.FAVORITE_OFFER_STATUS_UPDATING_FAILED,
      ],
    ])('should correctly update %s state on %s action', (resource, action) => {
      const state = {
        [resource]: {
          status: APIResourceStatus.IN_PROGRESS,
          error: {
            data: '',
            status: 0,
            statusText: '',
          },
        },
      };

      expect(api(state, { type: action, payload: { fake: true } } )).toStrictEqual({
        [resource]: {
          status: APIResourceStatus.FAILED,
          error: { fake: true },
        },
      });
    });
  });

  describe('Resources Cleared action', () => {
    test.each([
      [
        'offers',
        ActionType.OFFERS_CLEARED,
        {
          data: [],
          status: APIResourceStatus.IDLE,
          error: {
            data: '',
            status: 0,
            statusText: '',
          },
        },
      ],
      [
        'favoriteOffers',
        ActionType.FAVORITE_OFFERS_CLEARED,
        {
          data: [],
          status: APIResourceStatus.IDLE,
          error: {
            data: '',
            status: 0,
            statusText: '',
          },
        },
      ],
    ])('should correctly update %s state on %s action', (resource, action, initialState) => {
      const state = {
        [resource]: {
          data: [{fake: true}],
          status: APIResourceStatus.SUCCEEDED,
          error: {
            data: '',
            status: 0,
            statusText: '',
          },
        },
      };

      expect(api(state, { type: action })).toStrictEqual({
        [resource]: initialState,
      });
    });
  });

  it('should correctly update state on offersUpdated action', () => {
    const state = {
      offers: {
        data: [{ id: 1, fake: true}],
      },
    };

    const offersUpdated = {
      type: ActionType.OFFERS_UPDATED,
      payload: { id: 1, fake: false },
    };

    expect(api(state, offersUpdated)).toStrictEqual({
      offers: {
        data: [{ id: 1, fake: false }],
      },
    });
  });

  it('should correctly update state on offersNearbyUpdated action', () => {
    const state = {
      offersNearby: {
        data: [{ id: 1, fake: true}],
      },
    };

    const offersNearbyUpdated = {
      type: ActionType.OFFERS_NEARBY_UPDATED,
      payload: { id: 1, fake: false },
    };

    expect(api(state, offersNearbyUpdated)).toStrictEqual({
      offersNearby: {
        data: [{ id: 1, fake: false }],
      },
    });
  });

  it('should correctly update state on offerUpdated action', () => {
    const state = {
      offer: {
        data: { id: 1, fake: true},
      },
    };

    const offerUpdated = {
      type: ActionType.OFFER_UPDATED,
      payload: { id: 1, fake: false },
    };

    expect(api(state, offerUpdated)).toStrictEqual({
      offer: {
        data: { id: 1, fake: false },
      },
    });
  });

  describe('favoriteOffersDeleted action', () => {
    it('should delete existing item', () => {
      const state = {
        favoriteOffers: {
          data: [{ id: 1}, { id: 2 }],
        },
      };

      const favoriteOffersDeleted = {
        type: ActionType.FAVORITE_OFFERS_DELETED,
        payload: { id: 1 },
      };

      expect(api(state, favoriteOffersDeleted)).toStrictEqual({
        favoriteOffers: {
          data: [{ id: 2 }],
        },
      });
    });

    it('should leave state the same if the item doesn\'t exist', () => {
      const state = {
        favoriteOffers: {
          data: [{ id: 1}, { id: 2 }],
        },
      };

      const favoriteOffersDeleted = {
        type: ActionType.FAVORITE_OFFERS_DELETED,
        payload: { id: 3 },
      };

      expect(api(state, favoriteOffersDeleted)).toStrictEqual(state);
    });
  });

  describe('reviewCreated action', () => {
    it('should correctly update state', () => {
      const state = {
        reviews: {
          data: [{ id: 1}, { id: 2 }],
        },
        createReviewRequest: {
          status: APIResourceStatus.IN_PROGRESS,
        },
      };

      const reviewCreated = {
        type: ActionType.REVIEW_CREATED,
        payload: [{ id: 1 }, { id: 2 }, { id: 3 }],
      };

      expect(api(state, reviewCreated)).toStrictEqual({
        reviews: {
          data: [{ id: 1 }, { id: 2 }, { id: 3 }],
        },
        createReviewRequest: {
          status: APIResourceStatus.SUCCEEDED,
        },
      });
    });
  });

  describe('favoriteOfferStatusUpdated action', () => {
    it('should correctly update state on favoriteOfferStatusUpdated action', () => {
      const state = {
        updateFavoriteOfferStatusRequest: {
          status: APIResourceStatus.IN_PROGRESS,
        },
      };

      const favoriteOfferStatusUpdated = {
        type: ActionType.FAVORITE_OFFER_STATUS_UPDATED,
        payload: APIResourceStatus.SUCCEEDED,
      };

      expect(api(state, favoriteOfferStatusUpdated)).toStrictEqual({
        updateFavoriteOfferStatusRequest: {
          status: APIResourceStatus.SUCCEEDED,
        },
      });
    });
  });

  describe('serverStatusUpdated action', () => {
    it('should correctly update state on serverStatusUpdated action', () => {
      const state = {
        serverStatus: ServerStatus.IDLE,
      };

      const serverStatusUpdated = {
        type: ActionType.SERVER_STATUS_UPDATED,
        payload: ServerStatus.UNREACHABLE,
      };

      expect(api(state, serverStatusUpdated)).toStrictEqual({
        serverStatus: ServerStatus.UNREACHABLE,
      });
    });
  });
});
