const capitalizeFirstLetter = (string) => string[0].toUpperCase() + string.slice(1);

// Transform offers from array to object
// with key -> city name and value -> array of corresponding offers:
// { cityName: [offers] }

function groupOffersByCities(offers) {
  return offers.reduce((transformedOffers, offer) => {
    const { city: { name: cityName} } = offer;

    if (transformedOffers[cityName]) {
      transformedOffers[cityName].push(offer);
    } else {
      transformedOffers[cityName] = [offer];
    }

    return transformedOffers;
  }, {});
}

function getFavoriteOffers(offers) {
  const filteredOffers = offers.filter((offer) => offer.isFavorite);

  return groupOffersByCities(filteredOffers);
}

function pluralize(count) {
  return count > 1 ? 's' : '';
}

export {
  capitalizeFirstLetter,
  getFavoriteOffers,
  pluralize
};
