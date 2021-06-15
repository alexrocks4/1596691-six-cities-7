import React, { useState } from 'react';
import { offersProp } from '../../prop-types/offers.prop';
import PlaceCard from '../place-card/place-card';

const PlaceCardConfig = {
  className: {
    card: 'cities__place-card',
    imageWrapper: 'cities__image-wrapper',
  },
};

function PlaceCardList({ offers }) {
  // eslint-disable-next-line no-unused-vars
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
      config={PlaceCardConfig}
    />
  ));
}

PlaceCardList.propTypes = {
  offers: offersProp,
};

export default PlaceCardList;
