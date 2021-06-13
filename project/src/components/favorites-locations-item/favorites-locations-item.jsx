import React from 'react';
import PropTypes from 'prop-types';
import { offersProp } from '../../prop-types/offers.prop';
import PlaceCard from '../place-card/place-card';

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
        {offers.map((offer) => <PlaceCard key={offer.id} offer={offer} />)}
      </div>
    </li>
  );
}

FavoritesLocationsItem.propTypes = {
  cityName: PropTypes.string.isRequired,
  offers: offersProp,
};

export default FavoritesLocationsItem;
