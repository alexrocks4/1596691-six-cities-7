import React from 'react';
import { offerProp } from '../../prop-types/offers.prop';

function BookmarkButton({ offer }) {
  return (
    <button className={`place-card__bookmark-button ${offer.isFavorite ? 'place-card__bookmark-button--active' : ''} button`} type="button">
      <svg className="place-card__bookmark-icon" width={18} height={19}>
        <use xlinkHref="#icon-bookmark" />
      </svg>
      <span className="visually-hidden">To bookmarks</span>
    </button>
  );
}

BookmarkButton.propTypes = {
  offer: offerProp.isRequired,
};

export default BookmarkButton;
