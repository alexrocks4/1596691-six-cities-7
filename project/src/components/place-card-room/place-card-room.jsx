import React from 'react';
import PlaceCard from '../place-card/place-card';
import { offerProp } from '../../prop-types/offers.prop';

const placeCardConfig = {
  className: {
    card: 'near-places__card',
    imageWrapper: 'near-places__image-wrapper',
  },
};

function PlaceCardRoom(props) {
  return (
    <PlaceCard config={placeCardConfig} {...props} />
  );
}

PlaceCardRoom.propTypes = {
  offer: offerProp.isRequired,
};

export default PlaceCardRoom;
