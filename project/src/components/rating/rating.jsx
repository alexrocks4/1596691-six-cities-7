import React from 'react';
import PropTypes from 'prop-types';

const MAX_RATING = 5;
const PERCENTS_BASE = 100;

const convertRatingToPercents = (rating) => Math.round(rating) / MAX_RATING * PERCENTS_BASE;

function Rating(props) {
  const {
    rating,
    isRatingValueVisible,
    config,
  } = props;

  return (
    <div className={`${config.rating} rating`}>
      <div className={`${config.ratingStars} rating__stars`}>
        <span style={{width: `${convertRatingToPercents(rating)}%`}} />
        <span className="visually-hidden">Rating</span>
      </div>

      {isRatingValueVisible && (
        <span className={`${config.ratingValue} rating__value`}>
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
    rating: PropTypes.string,
    ratingStars: PropTypes.string,
    ratingValue: PropTypes.string,
  }),
};

export default Rating;
