import React from 'react';
import PropTypes from 'prop-types';

const MAX_RATING = 5;
const PERCENTS_BASE = 100;

const convertRatingToPercents = (rating) => rating / MAX_RATING * PERCENTS_BASE;

function Rating(props) {
  const {
    rating,
    isRatingValueVisible,
    config,
  } = props;

  return (
    <div className={`${config.className.rating} rating`}>
      <div className={`${config.className.ratingStars} rating__stars`}>
        <span style={{width: `${convertRatingToPercents(rating)}%`}} />
        <span className="visually-hidden">Rating</span>
      </div>

      {isRatingValueVisible && (
        <span className={`${config.className.ratingValue} rating__value`}>
          {rating}
        </span>
      )}
    </div>
  );
}

Rating.defaultProps = {
  isRatingValueVisible: false,
};

Rating.propTypes = {
  rating: PropTypes.number.isRequired,
  isRatingValueVisible: PropTypes.bool,
  config: PropTypes.shape({
    className: PropTypes.shape({
      rating: PropTypes.string,
      ratingStars: PropTypes.string,
      ratingValue: PropTypes.string,
    }),
  }),
};

export default Rating;
