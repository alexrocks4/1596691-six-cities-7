import dayjs from 'dayjs';

const sortOffersByPriceAscending = (previous, next) => previous.price - next.price;
const sortOffersByPriceDescending = (previous, next) => next.price - previous.price;
const sortOffersByRatingDescending = (previous, next) => next.rating - previous.rating;
const sortReviewsByDateDescending = (previous, next) => dayjs(next.date).valueOf() - dayjs(previous.date).valueOf();

export {
  sortOffersByPriceAscending,
  sortOffersByPriceDescending,
  sortOffersByRatingDescending,
  sortReviewsByDateDescending
};
