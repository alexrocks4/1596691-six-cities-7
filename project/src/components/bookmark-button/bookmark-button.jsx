import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { offerProp } from '../../prop-types/offers.prop';
import { setOfferAsFavorite, unsetOfferAsFavorite } from '../../store/api-actions';

function BookmarkButton({ offer, onClick }) {
  const dispatch = useDispatch();

  const handleButtonClick = () => {
    if (offer.isFavorite) {
      dispatch(unsetOfferAsFavorite(offer.id, onClick));
      return;
    }

    dispatch(setOfferAsFavorite(offer.id, onClick));
  };

  return (
    <button className={`place-card__bookmark-button ${offer.isFavorite ? 'place-card__bookmark-button--active' : ''} button`} type="button" onClick={handleButtonClick}>
      <svg className="place-card__bookmark-icon" width={18} height={19}>
        <use xlinkHref="#icon-bookmark" />
      </svg>
      <span className="visually-hidden">To bookmarks</span>
    </button>
  );
}

BookmarkButton.propTypes = {
  offer: offerProp.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default BookmarkButton;
