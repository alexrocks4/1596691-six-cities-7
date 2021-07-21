import React from 'react';
import favoriteOffersProp from '../../prop-types/favoriteOffers.prop';
import FavoritesLocationsItem from '../favorites-locations-item/favorites-locations-item';

function FavoritesMainContent({ favoriteOffers }) {
  return (
    <section className="favorites">
      <h1 className="favorites__title">Saved listing</h1>
      <ul className="favorites__list">
        {[...favoriteOffers].map(([cityName, offers]) => (
          <FavoritesLocationsItem
            key={cityName}
            cityName={cityName}
            offers={offers}
          />),
        )}
      </ul>
    </section>
  );
}

FavoritesMainContent.propTypes = {
  favoriteOffers: favoriteOffersProp,
};

export default FavoritesMainContent;
