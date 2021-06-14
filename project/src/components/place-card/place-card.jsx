import React from 'react';
import { offerProp } from '../../prop-types/offers.prop';
import PlaceCardMark from '../place-card-mark/place-card-mark';
import { capitalizeFirstLetter } from '../../utils/util';
import PropTypes from 'prop-types';
import Rating from '../rating/rating';

const DEFAULT_IMAGE_WIDTH = 260;
const DEFAULT_IMAGE_HEIGHT = 200;

const RatingConfig = {
  className: {
    rating: 'place-card__rating',
    ratingStars: 'place-card__stars',
  },
};

function PlaceCard(props) {
  const {
    offer,
    onCardMouseEnter,
    onCardMouseLeave,
    config,
  } = props;

  const imageWidth = config?.image ? config.image.width : DEFAULT_IMAGE_WIDTH;
  const imageHeight = config?.image ? config.image.height : DEFAULT_IMAGE_HEIGHT;

  function handleCardMouseEnter() {
    onCardMouseEnter(offer.id);
  }

  function handleCardMouseLeave() {
    onCardMouseLeave();
  }

  return (
    <article
      className={`${config?.className?.card} place-card`}
      onMouseEnter={onCardMouseEnter ? handleCardMouseEnter : undefined}
      onMouseLeave={onCardMouseLeave ? handleCardMouseLeave : undefined}
    >
      {offer.isPremium && <PlaceCardMark />}
      <div className={`${config?.className?.imageWrapper} place-card__image-wrapper`} >
        <a href="#">
          <img className="place-card__image" src={offer.previewImage} width={imageWidth} height={imageHeight} alt="Place" />
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">€{offer.price}</b>
            <span className="place-card__price-text">/&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button button" type="button">
            <svg className="place-card__bookmark-icon" width={18} height={19}>
              <use xlinkHref="#icon-bookmark" />
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <Rating
          rating={offer.rating}
          config={RatingConfig}
        />
        <h2 className="place-card__name">
          <a href="#">{offer.title}</a>
        </h2>
        <p className="place-card__type">{capitalizeFirstLetter(offer.type)}</p>
      </div>
    </article>
  );
}

PlaceCard.propTypes = {
  offer: offerProp,
  onCardMouseEnter: PropTypes.func,
  onCardMouseLeave: PropTypes.func,
  config: PropTypes.shape({
    className: PropTypes.shape({
      card: PropTypes.string,
      imageWrapper: PropTypes.string,
    }),
    image: PropTypes.shape({
      width: PropTypes.number.isRequired,
      height: PropTypes.number.isRequired,
    }),
  }),
};

export default PlaceCard;
