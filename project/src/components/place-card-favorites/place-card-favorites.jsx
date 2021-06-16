import React from 'react';
import PlaceCard from '../place-card/place-card';
import { offerProp } from '../../prop-types/offers.prop';

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
  return <PlaceCard config={placeCardConfig} {...props} />;
}

PlaceCardFavorites.propTypes = {
  offer: offerProp,
};

export default PlaceCardFavorites;
