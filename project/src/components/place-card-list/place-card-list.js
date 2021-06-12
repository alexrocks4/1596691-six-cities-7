import React, { useState } from 'react';
import { offersProp } from '../../prop-types/offers.prop';
import PlaceCard from '../place-card/place-card';

function PlaceCardList({ offers }) {
  const [ activeOfferId, setActiveOfferId ] = useState(null);

  function handleCardMouseEnter(id) {
    setActiveOfferId(id);
  }

  function handleCardMouseLeave() {
    setActiveOfferId(null);
  }

  return offers.map((offer) => (
    <PlaceCard
      key={offer.id}
      offer={offer}
      onCardMouseEnter={handleCardMouseEnter}
      onCardMouseLeave={handleCardMouseLeave}
    />
  ));
}

PlaceCardList.propTypes = {
  offers: offersProp,
};

export default PlaceCardList;
