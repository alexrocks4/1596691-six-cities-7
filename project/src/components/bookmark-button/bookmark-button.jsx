import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { offerProp } from '../../prop-types/offers.prop';
import { setOfferAsFavorite, unsetOfferAsFavorite } from '../../store/api-actions';
import { selectIsUserAuthorized } from '../../store/user/selectors';
import { redirectedToRoute } from '../../store/action';
import { APIRoute } from '../../const';
import classNames from 'classnames';

const DEFAULT_WIDTH = 18;
const DEFAULT_HEIGHT = 19;

function BookmarkButton({ offer, onClick, dimension, classConfig }) {
  const dispatch = useDispatch();
  const isUserAuthorized = useSelector(selectIsUserAuthorized);

  const handleButtonClick = () => {
    if (!isUserAuthorized) {
      dispatch(redirectedToRoute(APIRoute.LOGIN));
      return;
    }

    if (offer.isFavorite) {
      dispatch(unsetOfferAsFavorite(offer.id, onClick));
      return;
    }

    dispatch(setOfferAsFavorite(offer.id, onClick));
  };

  return (
    <button
      className={classNames(`button ${classConfig.button}`, {[classConfig.active]: offer.isFavorite})}
      type="button"
      onClick={handleButtonClick}
    >
      <svg className={classConfig.icon} width={dimension.width} height={dimension.height}>
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
  classConfig: PropTypes.shape({
    button: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    active: PropTypes.string.isRequired,
  }).isRequired,
};

BookmarkButton.defaultProps = {
  dimension: {
    width: DEFAULT_WIDTH,
    height: DEFAULT_HEIGHT,
  },
  classConfig: {
    button: 'place-card__bookmark-button',
    icon: 'place-card__bookmark-icon',
    active: 'place-card__bookmark-button--active',
  },
};

export default BookmarkButton;
