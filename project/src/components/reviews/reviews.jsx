import React from 'react';
import { reviewsProp } from '../../prop-types/reviews.prop';
import ReviewsForm from '../reviews-form/reviews-form';
import ReviewsItem from '../reviews-item/reviews-item';

function Reviews({ reviews }) {
  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews · <span className="reviews__amount">{reviews.length}</span></h2>
      <ul className="reviews__list">
        {reviews.map((review) => <ReviewsItem key={review.id} review={review} />)}
      </ul>
      <ReviewsForm />
    </section>
  );
}

Reviews.propTypes = {
  reviews: reviewsProp,
};

export default Reviews;
