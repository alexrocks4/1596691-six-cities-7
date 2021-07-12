const capitalizeFirstLetter = (string) => string[0].toUpperCase() + string.slice(1);

const filterOffersByCity = (offers, cityName) => (
  offers.filter(({ city }) => city.name.toLowerCase() === cityName.toLowerCase())
);

const pluralize = (count) => count > 1 ? 's' : '';

const getClassName = (isClassValid, className) => isClassValid ? className : '';

export {
  capitalizeFirstLetter,
  pluralize,
  filterOffersByCity,
  getClassName
};
