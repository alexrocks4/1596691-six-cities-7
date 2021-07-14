import React from 'react';
import { offersProp } from '../../prop-types/offers.prop';
import PropTypes from 'prop-types';

function PlaceCardList({ offers, render, className }) {
  return (
    <div className={className}>
      {offers.map((offer) => (
        render(offer)
      ))}
    </div>
  );
}

PlaceCardList.propTypes = {
  offers: offersProp,
  render: PropTypes.func.isRequired,
  className: PropTypes.string.isRequired,
};

PlaceCardList.defaultProps = {
  className: 'places__list',
};

export default PlaceCardList;
