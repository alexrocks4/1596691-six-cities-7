import { createSelector } from '@reduxjs/toolkit';
import { NameSpace } from '../rootReducer';
import { APIResourceStatus, SortingType } from '../../const';
import {
  sortOffersByPriceAscending,
  sortOffersByPriceDescending,
  sortOffersByRatingDescending
} from '../../application';
import { selectSortingType } from '../app/selectors';
import { HttpCode } from '../../const';

const selectOffers = (state) => state[NameSpace.API].offers.data;
const selectOffersStatus = (state) => state[NameSpace.API].offers.status;
const selectOffersError = (state) => state[NameSpace.API].offers.error;
const selectOffersNearby = (state) => state[NameSpace.API].offersNearby.data;
const selectOffersNearbyStatus = (state) => state[NameSpace.API].offersNearby.status;
const selectOffersNearbyError = (state) => state[NameSpace.API].offersNearby.error;
const selectOffer = (state) => state[NameSpace.API].offer.data;
const selectOfferStatus = (state) => state[NameSpace.API].offer.status;
const selectOfferError = (state) => state[NameSpace.API].offer.error;
const selectOfferErrorStatusCode = (state) => state[NameSpace.API].offer.error?.status;
const selectOfferErrorStatusText = (state) => state[NameSpace.API].offer.error?.statusText;
const selectReviews = (state) => state[NameSpace.API].reviews.data;
const selectReviewsStatus = (state) => state[NameSpace.API].reviews.status;

const selectFavoriteOffers = createSelector(
  selectOffers,
  (offers) => offers.filter((offer) => offer.isFavorite),
);

const selectFavoriteOffersGroupedByCities = createSelector(
  selectFavoriteOffers,
  (offers) => {
    const groupedOffers = new Map();

    offers.forEach((offer) => {
      const { city: { name: cityName} } = offer;
      const oldOffers = groupedOffers.get(cityName);
      const newOffers = oldOffers ? [ ...oldOffers, offer ] : [ offer ];

      groupedOffers.set(cityName, newOffers);
    });

    return groupedOffers;
  },
);

const makeSelectFilteredOffersByCity = () => (
  createSelector(
    selectOffers,
    (_, cityName) => cityName,
    (offers, cityName) => (
      offers.filter(({ city }) => city.name.toLowerCase() === cityName.toLowerCase())
    ),
  )
);

const selectIsOffersLoading = createSelector(
  selectOffersStatus,
  (status) => status === APIResourceStatus.LOADING || status === APIResourceStatus.IDLE,
);

const selectIsOfferLoading = createSelector(
  selectOfferStatus,
  (status) => status === APIResourceStatus.LOADING || status === APIResourceStatus.IDLE,
);

const selectIsOfferFetchingFailed = createSelector(
  selectOfferStatus,
  (status) => status === APIResourceStatus.FAILED,
);

const selectIsOfferNotFound = createSelector(
  selectIsOfferFetchingFailed,
  selectOfferError,
  (isFailed, error) => isFailed && error.status && error.status === HttpCode.NOT_FOUND,
);

const makeSelectOfferById = () => (
  createSelector(
    selectOffers,
    (_, id) => id,
    (offers, id) => offers.find((offer) => offer.id.toString() === id),
  )
);

const makeSelectSortedOffers = () => (
  createSelector(
    selectSortingType,
    (_, offers) => offers,
    (sortingType, offers) => {
      switch (sortingType) {
        case SortingType.POPULAR:
          return offers;
        case SortingType.PRICE_ASCENDING:
          return offers.slice().sort(sortOffersByPriceAscending);
        case SortingType.PRICE_DESCENDING:
          return offers.slice().sort(sortOffersByPriceDescending);
        case SortingType.TOP_RATED:
          return offers.slice().sort(sortOffersByRatingDescending);
        default:
          return offers;
      }
    },
  )
);

export {
  selectOffers,
  selectOffersStatus,
  selectOffersError,
  selectOffersNearby,
  selectOffersNearbyStatus,
  selectOffersNearbyError,
  selectOffer,
  selectOfferStatus,
  selectFavoriteOffersGroupedByCities,
  makeSelectFilteredOffersByCity,
  selectIsOffersLoading,
  selectIsOfferLoading,
  selectIsOfferFetchingFailed,
  selectIsOfferNotFound,
  selectOfferErrorStatusCode,
  selectOfferErrorStatusText,
  makeSelectOfferById,
  makeSelectSortedOffers,
  selectReviews,
  selectReviewsStatus
};
