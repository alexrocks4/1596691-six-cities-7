import React from 'react';
import { offersProp } from '../../prop-types/offers.prop';
import PlaceCard from '../place-card/place-card';

function PlaceCardList({ offers }) {
  return offers.map((offer) => <PlaceCard key={offer.id} offer={offer} />);
}

PlaceCardList.propTypes = {
  offers: offersProp,
};

export default PlaceCardList;
