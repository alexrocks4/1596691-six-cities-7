import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { offerProp } from '../../prop-types/offers.prop';
import { setOfferAsFavorite, unsetOfferAsFavorite } from '../../store/api-actions';

const DEFAULT_WIDTH = 18;
const DEFAULT_HEIGHT = 19;

function BookmarkButton({ offer, onClick, dimension }) {
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
      <svg className="place-card__bookmark-icon" width={dimension.width} height={dimension.height}>
        <use xlinkHref="#icon-bookmark" />
      </svg>
      <span className="visually-hidden">To bookmarks</span>
    </button>
  );
}

BookmarkButton.propTypes = {
  offer: offerProp.isRequired,
  onClick: PropTypes.func.isRequired,
  dimension: PropTypes.shape({
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
  }),
};

BookmarkButton.defaultProps = {
  dimension: {
    width: DEFAULT_WIDTH,
    height: DEFAULT_HEIGHT,
  },
};

export default BookmarkButton;
