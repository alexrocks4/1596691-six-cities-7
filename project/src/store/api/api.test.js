import { APIResourceStatus, ServerStatus } from '../../const';
import { ActionType } from '../action';
import api from './api';

const getInitialFetchingError = () => ({
  data: '',
  status: 0,
  statusText: '',
});

const geInitialDataState = (data = []) => ({
  data,
  status: APIResourceStatus.IDLE,
  error: getInitialFetchingError(),
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

  it('should update offers status to IN_PROGRESS', () => {
    const state = {
      offers: {
        status: APIResourceStatus.IDLE,
      },
    };

    const offersFetchingStarted = {
      type: ActionType.OFFERS_FETCHING_STARTED,
    };

    expect(api(state, offersFetchingStarted)).toStrictEqual({
      offers: {
        status: APIResourceStatus.IN_PROGRESS,
      },
    });
  });
});
