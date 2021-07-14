import React from 'react';
import { offersProp } from '../../prop-types/offers.prop';
import PlaceCardRoom from '../place-card-room/place-card-room';

function NearPlaces({ offers }) {
  return (
    <section className="near-places places">
      <h2 className="near-places__title">Other places in the neighbourhood</h2>
      <div className="near-places__list places__list">
        {offers.map((offer) => (
          <PlaceCardRoom
            key={offer.id}
            offer={offer}
          />
        ))}
      </div>
    </section>
  );
}

NearPlaces.propTypes = {
  offers: offersProp,
};

export default NearPlaces;
