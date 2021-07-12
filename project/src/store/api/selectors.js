import { createSelector } from '@reduxjs/toolkit';
import { NameSpace } from '../rootReducer';
import { APIResourceStatus } from '../../const';

const selectOffers = (state) => state[NameSpace.API].offers.data;
const selectOffersStatus = (state) => state[NameSpace.API].offers.status;
const selectOffersError = (state) => state[NameSpace.API].offers.error;

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

export {
  selectOffers,
  selectOffersStatus,
  selectOffersError,
  selectFavoriteOffersGroupedByCities,
  makeSelectFilteredOffersByCity,
  selectIsOffersLoading
};
