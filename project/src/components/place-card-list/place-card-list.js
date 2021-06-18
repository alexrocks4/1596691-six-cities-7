import React, { useState } from 'react';
import { offersProp } from '../../prop-types/offers.prop';
import PlaceCardMain from '../place-card-main/place-card-main';

function PlaceCardList({ offers }) {
  // eslint-disable-next-line no-unused-vars
  const [ activeOffer, setActiveOffer ] = useState(null);

  function handleCardMouseEnter(offer) {
    setActiveOffer(offer);
  }

  return offers.map((offer) => (
    <PlaceCardMain
      key={offer.id}
      offer={offer}
      onCardMouseEnter={handleCardMouseEnter}
    />
  ));
}

PlaceCardList.propTypes = {
  offers: offersProp,
};

export default PlaceCardList;
