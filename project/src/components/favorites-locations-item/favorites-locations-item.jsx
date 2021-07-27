import React from 'react';
import PropTypes from 'prop-types';
import { offersProp } from '../../prop-types/offers.prop';
import PlaceCardFavorites from '../place-card-favorites/place-card-favorites';

function FavoritesLocationsItem({ cityName, offers }) {
  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <a
            className="locations__item-link"
            href={`#${cityName.toLowerCase()}`}
            onClick={(evt) => evt.preventDefault()}
          >
            <span>{cityName}</span>
          </a>
        </div>
      </div>
      <div className="favorites__places">
        {offers.map((offer) => (
          <PlaceCardFavorites
            key={offer.id}
            offer={offer}
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
