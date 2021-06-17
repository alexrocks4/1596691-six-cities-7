import React, { useState } from 'react';
import { offersProp } from '../../prop-types/offers.prop';
import PlaceCardMain from '../place-card-main/place-card-main';

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
    <PlaceCardMain
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
