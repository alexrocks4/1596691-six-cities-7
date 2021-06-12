import React from 'react';
import { offerProp } from '../../prop-types/offers.prop';
import PlaceCardMark from '../place-card-mark/place-card-mark';
import { capitalizeFirstLetter } from '../../utils/util';

const MAX_RATING = 5;
const PERCENTS_BASE = 100;

function convertRatingToPercents(rating) {
  return rating / MAX_RATING * PERCENTS_BASE;
}

function PlaceCard(props) {
  const { offer } = props;

  return (
    <article className="cities__place-card place-card">
      {offer.isPremium && <PlaceCardMark />}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img className="place-card__image" src={offer.previewImage} width={260} height={200} alt="Place" />
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
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${convertRatingToPercents(offer.rating)}%`}} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
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
};

export default PlaceCard;
