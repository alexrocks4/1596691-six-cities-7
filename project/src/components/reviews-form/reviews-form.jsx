import classNames from 'classnames';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { DECIMAL_RADIX } from '../../const';
import { createReview } from '../../store/api-actions';
import { selectIsCreateReviewRequestInProgress, selectIsCreateReviewRequestFailed } from '../../store/api/selectors';
import './reviews-form.css';

const DEFAULT_RATING = 0;
const DEFAULT_REVIEW = '';
const MIN_REVIEW_LENGTH = 50;
const MAX_REVIEW_LENGTH = 300;

function ReviewsForm() {
  const dispatch = useDispatch();
  const [ rating, setRating ] = useState(DEFAULT_RATING);
  const [ review, setReview ] = useState(DEFAULT_REVIEW);
  const { id: offerId } = useParams();
  const isCreateReviewRequestInProgress = useSelector(selectIsCreateReviewRequestInProgress);
  const isCreateReviewRequestFailed= useSelector(selectIsCreateReviewRequestFailed);

  const handleReviewChange = (evt) => {
    setReview(evt.target.value);
  };

  const handleRatingChange = (evt) => {
    setRating(Number.parseInt(evt.target.value, DECIMAL_RADIX));
  };

  const handleFormSubmit = (evt) => {
    evt.preventDefault();
    dispatch(createReview({
      offerId,
      review: {
        comment: review,
        rating: rating,
      }}))
      .then(() => {
        setRating(DEFAULT_RATING);
        setReview(DEFAULT_REVIEW);
      });
  };

  const isReviewOk = review.length >= MIN_REVIEW_LENGTH && review.length < MAX_REVIEW_LENGTH;
  const isSubmitDisbled = !isReviewOk || rating === DEFAULT_RATING || isCreateReviewRequestInProgress;

  return (
    <form
      className={classNames('reviews__form form', { 'js-form--swing': isCreateReviewRequestFailed })}
      action="#"
      method="post"
      onSubmit={handleFormSubmit}
    >
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        <input className="form__rating-input visually-hidden" name="rating" defaultValue={5} id="5-stars" type="radio" checked={rating === 5} onChange={handleRatingChange} disabled={isCreateReviewRequestInProgress} />
        <label htmlFor="5-stars" className="reviews__rating-label form__rating-label" title="perfect">
          <svg className="form__star-image" width={37} height={33}>
            <use xlinkHref="#icon-star" />
          </svg>
        </label>
        <input className="form__rating-input visually-hidden" name="rating" defaultValue={4} id="4-stars" type="radio" checked={rating === 4} onChange={handleRatingChange} disabled={isCreateReviewRequestInProgress} />
        <label htmlFor="4-stars" className="reviews__rating-label form__rating-label" title="good">
          <svg className="form__star-image" width={37} height={33}>
            <use xlinkHref="#icon-star" />
          </svg>
        </label>
        <input className="form__rating-input visually-hidden" name="rating" defaultValue={3} id="3-stars" type="radio" checked={rating === 3} onChange={handleRatingChange} disabled={isCreateReviewRequestInProgress} />
        <label htmlFor="3-stars" className="reviews__rating-label form__rating-label" title="not bad">
          <svg className="form__star-image" width={37} height={33}>
            <use xlinkHref="#icon-star" />
          </svg>
        </label>
        <input className="form__rating-input visually-hidden" name="rating" defaultValue={2} id="2-stars" type="radio" checked={rating === 2} onChange={handleRatingChange} disabled={isCreateReviewRequestInProgress} />
        <label htmlFor="2-stars" className="reviews__rating-label form__rating-label" title="badly">
          <svg className="form__star-image" width={37} height={33}>
            <use xlinkHref="#icon-star" />
          </svg>
        </label>
        <input className="form__rating-input visually-hidden" name="rating" defaultValue={1} id="1-star" type="radio" checked={rating === 1} onChange={handleRatingChange} disabled={isCreateReviewRequestInProgress} />
        <label htmlFor="1-star" className="reviews__rating-label form__rating-label" title="terribly">
          <svg className="form__star-image" width={37} height={33}>
            <use xlinkHref="#icon-star" />
          </svg>
        </label>
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        value={review}
        onChange={handleReviewChange}
        disabled={isCreateReviewRequestInProgress}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={isSubmitDisbled}>
          {isCreateReviewRequestInProgress ? 'Submitting...' : 'Submit'}
        </button>
      </div>
    </form>
  );
}

export default ReviewsForm;
