import React from 'react';
import PropTypes from 'prop-types';
import Places from '../places/places';
import Map from '../map/map';
import { offerProp, offersProp } from '../../prop-types/offers.prop';
import { City } from '../../const';

function CitiesPlaces(props) {
  const {
    offers,
    currentCity,
    activeOffer,
    onPlacesCardMouseEnter,
    onPlacesCardMouseLeave,
  } = props;

  return (
    <React.Fragment>
      <Places
        offers={offers}
        onCardMouseEnter={onPlacesCardMouseEnter}
        onCardMouseLeave={onPlacesCardMouseLeave}
      >
      </Places>
      <div className="cities__right-section">
        <section className="cities__map map">
          <Map
            city={City[currentCity]}
            points={offers}
            selectedPoint={activeOffer}
          />
        </section>
      </div>
    </React.Fragment>
  );
}

CitiesPlaces.propTypes = {
  offers: offersProp,
  currentCity: PropTypes.string.isRequired,
  activeOffer: offerProp,
  onPlacesCardMouseEnter: PropTypes.func.isRequired,
  onPlacesCardMouseLeave: PropTypes.func.isRequired,
};

CitiesPlaces.defaultProps = {
  activeOffer: null,
};

export default CitiesPlaces;
