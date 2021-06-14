import React from 'react';
import PropTypes from 'prop-types';
import { offersProp } from '../../prop-types/offers.prop';
import PlaceCard from '../place-card/place-card';

const PlaceCardConfig = {
  className: {
    card: 'favorites__card',
    imageWrapper: 'favorites__image-wrapper',
  },
  image: {
    width: 150,
    height: 110,
  },
};

function FavoritesLocationsItem({ cityName, offers }) {
  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <a className="locations__item-link" href="#">
            <span>{cityName}</span>
          </a>
        </div>
      </div>
      <div className="favorites__places">
        {offers.map((offer) => (
          <PlaceCard
            key={offer.id}
            offer={offer}
            config={PlaceCardConfig}
          />
        ))}
      </div>
    </li>
  );
}

FavoritesLocationsItem.propTypes = {
  cityName: PropTypes.string.isRequired,
  offers: offersProp,
};

export default FavoritesLocationsItem;
