const sortOffersByPriceAscending = (previous, next) => previous.price - next.price;
const sortOffersByPriceDescending = (previous, next) => next.price - previous.price;
const sortOffersByRatingDescending = (previous, next) => next.rating - previous.rating;

export {
  sortOffersByPriceAscending,
  sortOffersByPriceDescending,
  sortOffersByRatingDescending
};
