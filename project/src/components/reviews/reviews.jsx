import React from 'react';
import { useSelector } from 'react-redux';
import { selectReviews } from '../../store/api/selectors';
import { selectIsUserAuthorized } from '../../store/user/selectors';
import ReviewsForm from '../reviews-form/reviews-form';
import ReviewsItem from '../reviews-item/reviews-item';

function Reviews() {
  const reviews = useSelector(selectReviews);
  const isUserAuthorized = useSelector(selectIsUserAuthorized);

  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews · <span className="reviews__amount">{reviews.length}</span></h2>
      <ul className="reviews__list">
        {reviews.map((review) => <ReviewsItem key={review.id} review={review} />)}
      </ul>
      {isUserAuthorized && <ReviewsForm />}
    </section>
  );
}

export default Reviews;
