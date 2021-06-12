const capitalizeFirstLetter = (string) => string[0].toUpperCase() + string.slice(1);

// Transform offers from array to object
// with key -> city name and value -> array of corresponding offers:
// { cityName: [offers] }

function getTransformedOffers(offers) {
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

  return getTransformedOffers(filteredOffers);
}

export {
  capitalizeFirstLetter,
  getFavoriteOffers
};
