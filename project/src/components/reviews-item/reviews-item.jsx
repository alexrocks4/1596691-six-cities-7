import React from 'react';
import Rating from '../rating/rating';
import dayjs from 'dayjs';
import { reviewProp } from '../../prop-types/reviews.prop';

const RatingConfig = {
  rating: 'reviews__rating',
  ratingStars: 'reviews__stars',
};

function ReviewsItem({ review }) {
  const {
    user: {
      avatarUrl,
      name,
    },
    rating,
    comment,
  } = review;

  const date = dayjs(review.date);

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={avatarUrl} width={54} height={54} alt="Reviews avatar" />
        </div>
        <span className="reviews__user-name">
          {name}
        </span>
      </div>
      <div className="reviews__info">
        <Rating
          rating={rating}
          config={RatingConfig}
        />
        <p className="reviews__text">
          {comment}
        </p>
        <time className="reviews__time" dateTime={date.format('YYYY-MM-DD')}>{date.format('MMMM YYYY')}</time>
      </div>
    </li>
  );
}

ReviewsItem.propTypes = {
  review: reviewProp,
};

export default ReviewsItem;
