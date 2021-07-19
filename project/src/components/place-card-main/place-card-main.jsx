import React from 'react';
import PlaceCard from '../place-card/place-card';
import { offerProp } from '../../prop-types/offers.prop';

const placeCardConfig = {
  className: {
    card: 'cities__place-card',
    imageWrapper: 'cities__image-wrapper',
  },
};

function PlaceCardMain(props) {
  return <PlaceCard config={placeCardConfig} {...props} />;
}

PlaceCardMain.propTypes = {
  offer: offerProp.isRequired,
};

export default PlaceCardMain;
