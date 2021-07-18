import PropTypes from 'prop-types';

const reviewProp = PropTypes.shape({
  comment: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  user: PropTypes.shape({
    avatarUrl: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    isPro: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
  }),
}).isRequired;

const reviewsProp = PropTypes.arrayOf(reviewProp).isRequired;

export { reviewProp, reviewsProp };
