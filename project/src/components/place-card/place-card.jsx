import React from 'react';
import { offerProp } from '../../prop-types/offers.prop';
import PlaceCardMark from '../place-card-mark/place-card-mark';
import { capitalizeFirstLetter } from '../../utils/util';
import PropTypes from 'prop-types';
import Rating from '../rating/rating';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import BookmarkButton from '../bookmark-button/bookmark-button';

const DEFAULT_IMAGE_WIDTH = 260;
const DEFAULT_IMAGE_HEIGHT = 200;

const RatingConfig = {
  rating: 'place-card__rating',
  ratingStars: 'place-card__stars',
};

function PlaceCard(props) {
  const {
    offer,
    onCardMouseEnter,
    onCardMouseLeave,
    config,
    onBookmarkButtonClick,
  } = props;

  const imageWidth = config?.image ? config.image.width : DEFAULT_IMAGE_WIDTH;
  const imageHeight = config?.image ? config.image.height : DEFAULT_IMAGE_HEIGHT;

  function handleCardMouseEnter() {
    onCardMouseEnter(offer);
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
        <Link to={`${AppRoute.ROOM_BASE}/${offer.id}`}>
          <img className="place-card__image" src={offer.previewImage} width={imageWidth} height={imageHeight} alt="Place" />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">€{offer.price}</b>
            <span className="place-card__price-text">/&nbsp;night</span>
          </div>
          <BookmarkButton offer={offer} onClick={onBookmarkButtonClick} />
        </div>
        <Rating
          rating={offer.rating}
          config={RatingConfig}
        />
        <h2 className="place-card__name">
          <Link to={`${AppRoute.ROOM_BASE}/${offer.id}`}>{offer.title}</Link>
        </h2>
        <p className="place-card__type">{capitalizeFirstLetter(offer.type)}</p>
      </div>
    </article>
  );
}

PlaceCard.propTypes = {
  offer: offerProp.isRequired,
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
  onBookmarkButtonClick: PropTypes.func.isRequired,
};

export default PlaceCard;
