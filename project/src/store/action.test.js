import {
  ActionType,
  cityUpdated,
  sortingTypeUpdated,
  offersFetchingStarted,
  offersLoaded,
  offersUpdated,
  offersCleared,
  loggedIn,
  loggedOut,
  notAuthorized,
  redirectedToRoute,
  offersNearbyFetchingStarted,
  offersNearbyLoaded,
  offersNearbyUpdated,
  offerFetchingStarted,
  offerFetchingFailed,
  offerLoaded,
  offerUpdated,
  favoriteOffersFetchingStarted,
  favoriteOffersFetchingFailed,
  favoriteOffersLoaded,
  favoriteOffersUpdated,
  favoriteOffersCleared,
  reviewsFetchingStarted,
  reviewsFetchingFailed,
  reviewsLoaded,
  reviewCreationStarted,
  reviewCreationFailed,
  reviewCreated,
  favoriteOfferStatusUpdatingStarted,
  favoriteOfferStatusUpdatingFailed,
  favoriteOfferStatusUpdated,
  serverStatusUpdated,
  updateOffers,
  updateOffer,
  updateOffersNearby,
  updateFavoriteOffers
} from './action';

describe('Actions', () => {
  it('action creator for updating current city name returns correct action', () => {
    const expectedAction = {
      type: ActionType.CITY_UPDATED,
      payload: '',
    };

    expect(cityUpdated('')).toEqual(expectedAction);
  });

  it('action creator for updating current sorting type returns correct action', () => {
    const expectedAction = {
      type: ActionType.SORTING_TYPE_UPDATED,
      payload: '',
    };

    expect(sortingTypeUpdated('')).toEqual(expectedAction);
  });

  it('action creator for starting offers fetching returns correct action', () => {
    const expectedAction = {
      type: ActionType.OFFERS_FETCHING_STARTED,
    };

    expect(offersFetchingStarted()).toEqual(expectedAction);
  });

  it('action creator for offers loaded returns correct action', () => {
    const expectedAction = {
      type: ActionType.OFFERS_LOADED,
      payload: [],
    };

    expect(offersLoaded([])).toEqual(expectedAction);
  });

  it('action creator for offers updated returns correct action', () => {
    const expectedAction = {
      type: ActionType.OFFERS_UPDATED,
      payload: {},
    };

    expect(offersUpdated({})).toEqual(expectedAction);
  });

  it('action creator for offers cleared returns correct action', () => {
    const expectedAction = {
      type: ActionType.OFFERS_CLEARED,
    };

    expect(offersCleared()).toEqual(expectedAction);
  });

  it('action creator for starting nearby offers fetching returns correct action', () => {
    const expectedAction = {
      type: ActionType.OFFERS_NEARBY_FETCHING_STARTED,
    };

    expect(offersNearbyFetchingStarted()).toEqual(expectedAction);
  });

  it('action creator for nearby offers loaded returns correct action', () => {
    const expectedAction = {
      type: ActionType.OFFERS_NEARBY_LOADED,
      payload: [],
    };

    expect(offersNearbyLoaded([])).toEqual(expectedAction);
  });

  it('action creator for nearby offers updated returns correct action', () => {
    const expectedAction = {
      type: ActionType.OFFERS_NEARBY_UPDATED,
      payload: {},
    };

    expect(offersNearbyUpdated({})).toEqual(expectedAction);
  });

  it('action creator for starting offer fetching returns correct action', () => {
    const expectedAction = {
      type: ActionType.OFFER_FETCHING_STARTED,
    };

    expect(offerFetchingStarted()).toEqual(expectedAction);
  });

  it('action creator for failed offer fetching returns correct action', () => {
    const expectedAction = {
      type: ActionType.OFFER_FETCHING_FAILED,
      payload: {},
    };

    expect(offerFetchingFailed({})).toEqual(expectedAction);
  });

  it('action creator for offer loaded returns correct action', () => {
    const expectedAction = {
      type: ActionType.OFFER_LOADED,
      payload: {},
    };

    expect(offerLoaded({})).toEqual(expectedAction);
  });

  it('action creator for offer updated returns correct action', () => {
    const expectedAction = {
      type: ActionType.OFFER_UPDATED,
      payload: {},
    };

    expect(offerUpdated({})).toEqual(expectedAction);
  });

  it('action creator for starting favorite offers fetching returns correct action', () => {
    const expectedAction = {
      type: ActionType.FAVORITE_OFFERS_FETCHING_STARTED,
    };

    expect(favoriteOffersFetchingStarted()).toEqual(expectedAction);
  });

  it('action creator for failed favorite offers fetching returns correct action', () => {
    const expectedAction = {
      type: ActionType.FAVORITE_OFFERS_FETCHING_FAILED,
      payload: {},
    };

    expect(favoriteOffersFetchingFailed({})).toEqual(expectedAction);
  });

  it('action creator for favorite offers loaded returns correct action', () => {
    const expectedAction = {
      type: ActionType.FAVORITE_OFFERS_LOADED,
      payload: [],
    };

    expect(favoriteOffersLoaded([])).toEqual(expectedAction);
  });

  it('action creator for favorite offers updated returns correct action', () => {
    const expectedAction = {
      type: ActionType.FAVORITE_OFFERS_UPDATED,
      payload: {},
    };

    expect(favoriteOffersUpdated({})).toEqual(expectedAction);
  });

  it('action creator for favorite offers cleared returns correct action', () => {
    const expectedAction = {
      type: ActionType.FAVORITE_OFFERS_CLEARED,
    };

    expect(favoriteOffersCleared()).toEqual(expectedAction);
  });

  it('action creator for starting reviews fetching returns correct action', () => {
    const expectedAction = {
      type: ActionType.REVIEWS_FETCHING_STARTED,
    };

    expect(reviewsFetchingStarted()).toEqual(expectedAction);
  });

  it('action creator for failed reviews fetching returns correct action', () => {
    const expectedAction = {
      type: ActionType.REVIEWS_FETCHING_FAILED,
      payload: {},
    };

    expect(reviewsFetchingFailed({})).toEqual(expectedAction);
  });

  it('action creator for reviews loaded returns correct action', () => {
    const expectedAction = {
      type: ActionType.REVIEWS_LOADED,
      payload: [],
    };

    expect(reviewsLoaded([])).toEqual(expectedAction);
  });

  it('action creator for starting review creation returns correct action', () => {
    const expectedAction = {
      type: ActionType.REVIEW_CREATION_STARTED,
    };

    expect(reviewCreationStarted()).toEqual(expectedAction);
  });

  it('action creator for failed review creation returns correct action', () => {
    const expectedAction = {
      type: ActionType.REVIEW_CREATION_FAILED,
      payload: {},
    };

    expect(reviewCreationFailed({})).toEqual(expectedAction);
  });

  it('action creator for created review returns correct action', () => {
    const expectedAction = {
      type: ActionType.REVIEW_CREATED,
      payload: {},
    };

    expect(reviewCreated({})).toEqual(expectedAction);
  });

  it('action creator for started favorite offer status updating returns correct action', () => {
    const expectedAction = {
      type: ActionType.FAVORITE_OFFER_STATUS_UPDATING_STARTED,
    };

    expect(favoriteOfferStatusUpdatingStarted()).toEqual(expectedAction);
  });

  it('action creator for failed favorite offer status updating returns correct action', () => {
    const expectedAction = {
      type: ActionType.FAVORITE_OFFER_STATUS_UPDATING_FAILED,
      payload: {},
    };

    expect(favoriteOfferStatusUpdatingFailed({})).toEqual(expectedAction);
  });

  it('action creator for favorite offer status updated returns correct action', () => {
    const expectedAction = {
      type: ActionType.FAVORITE_OFFER_STATUS_UPDATED,
    };

    expect(favoriteOfferStatusUpdated()).toEqual(expectedAction);
  });

  it('action creator for server status updated returns correct action', () => {
    const expectedAction = {
      type: ActionType.SERVER_STATUS_UPDATED,
      payload: '',
    };

    expect(serverStatusUpdated('')).toEqual(expectedAction);
  });

  it('action creator for user logged in returns correct action', () => {
    const expectedAction = {
      type: ActionType.LOGGED_IN,
      payload: {},
    };

    expect(loggedIn({})).toEqual(expectedAction);
  });

  it('action creator for user logged out returns correct action', () => {
    const expectedAction = {
      type: ActionType.LOGGED_OUT,
    };

    expect(loggedOut()).toEqual(expectedAction);
  });

  it('action creator for user not authorized returns correct action', () => {
    const expectedAction = {
      type: ActionType.NOT_AUTHORIZED,
    };

    expect(notAuthorized()).toEqual(expectedAction);
  });

  it('action creator for redirected to route returns correct action', () => {
    const expectedAction = {
      type: ActionType.REDIRECTED_TO_ROUTE,
      payload: '',
    };

    expect(redirectedToRoute('')).toEqual(expectedAction);
  });
});

describe('Thunks', () => {
  it('should dispatch correct offers update action', () => {
    const offer = { id: 1 };
    const dispatch = jest.fn();
    const offersUpdater = updateOffers(offer);
    offersUpdater(dispatch);

    expect(dispatch).toHaveBeenCalledTimes(1);
    expect(dispatch).toHaveBeenNthCalledWith(1, {
      type: ActionType.OFFERS_UPDATED,
      payload: offer,
    });
  });

  it('should dispatch correct offer update action', () => {
    const offer = { id: 1 };
    const dispatch = jest.fn();
    const offerUpdater = updateOffer(offer);
    offerUpdater(dispatch);

    expect(dispatch).toHaveBeenCalledTimes(1);
    expect(dispatch).toHaveBeenNthCalledWith(1, {
      type: ActionType.OFFER_UPDATED,
      payload: offer,
    });
  });

  it('should dispatch correct offers nearby update action', () => {
    const offer = { id: 1 };
    const dispatch = jest.fn();
    const offersNearbyUpdater = updateOffersNearby(offer);
    offersNearbyUpdater(dispatch);

    expect(dispatch).toHaveBeenCalledTimes(1);
    expect(dispatch).toHaveBeenNthCalledWith(1, {
      type: ActionType.OFFERS_NEARBY_UPDATED,
      payload: offer,
    });
  });

  it('should dispatch correct favorite offers update action', () => {
    const offer = { id: 1 };
    const dispatch = jest.fn();
    const favoriteOffersUpdater = updateFavoriteOffers(offer);
    favoriteOffersUpdater(dispatch);

    expect(dispatch).toHaveBeenCalledTimes(1);
    expect(dispatch).toHaveBeenNthCalledWith(1, {
      type: ActionType.FAVORITE_OFFERS_UPDATED,
      payload: offer,
    });
  });
});
