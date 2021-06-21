import React from 'react';
import { offersProp } from '../../prop-types/offers.prop';
import PlaceCardMain from '../place-card-main/place-card-main';
import PropTypes from 'prop-types';

function PlaceCardList({ offers, onCardMouseEnter}) {
  return offers.map((offer) => (
    <PlaceCardMain
      key={offer.id}
      offer={offer}
      onCardMouseEnter={onCardMouseEnter}
    />
  ));
}

PlaceCardList.propTypes = {
  offers: offersProp,
  onCardMouseEnter: PropTypes.func.isRequired,
};

export default PlaceCardList;
