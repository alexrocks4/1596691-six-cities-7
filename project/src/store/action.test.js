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
  it('action creator for updating current city name return correct action', () => {
    const city = 'Paris';
    const expectedAction = {
      type: ActionType.CITY_UPDATED,
      payload: city,
    };

    expect(cityUpdated(city)).toEqual(expectedAction);
  });
});
