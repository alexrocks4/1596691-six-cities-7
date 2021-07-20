import React from 'react';
import PlaceCard from '../place-card/place-card';
import { offerProp } from '../../prop-types/offers.prop';
import { updateFavoriteOffers } from '../../store/action';

const placeCardConfig = {
  className: {
    card: 'favorites__card',
    imageWrapper: 'favorites__image-wrapper',
  },
  image: {
    width: 150,
    height: 110,
  },
};

function PlaceCardFavorites(props) {
  return (
    <PlaceCard
      config={placeCardConfig}
      onBookmarkButtonClick={updateFavoriteOffers}
      {...props}
    />
  );
}

PlaceCardFavorites.propTypes = {
  offer: offerProp.isRequired,
};

export default PlaceCardFavorites;
