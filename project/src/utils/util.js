import { AuthorizationStatus } from '../const';

const capitalizeFirstLetter = (string) => string[0].toUpperCase() + string.slice(1);

// Transform offers from array to Map
// with key -> city name and value -> array of corresponding offers:
// { cityName: [offers] }

const groupOffersByCities = (offers) => {
  const groupedOffers = new Map();

  offers.forEach((offer) => {
    const { city: { name: cityName} } = offer;
    const oldOffers = groupedOffers.get(cityName);
    const newOffers = oldOffers ? [ ...oldOffers, offer ] : [ offer ];

    groupedOffers.set(cityName, newOffers);
  });

  return groupedOffers;
};

const filterOffersByCity = (offers, cityName) => (
  offers.filter(({ city }) => city.name.toLowerCase() === cityName.toLowerCase())
);

const getFavoriteOffers = (offers) => {
  const filteredOffers = offers.filter((offer) => offer.isFavorite);

  return groupOffersByCities(filteredOffers);
};

const pluralize = (count) => count > 1 ? 's' : '';

const getClassName = (isClassValid, className) => isClassValid ? className : '';

const isAuthorized = (authorizationStatus) => authorizationStatus === AuthorizationStatus.AUTH;

export {
  capitalizeFirstLetter,
  getFavoriteOffers,
  pluralize,
  filterOffersByCity,
  getClassName,
  isAuthorized
};
