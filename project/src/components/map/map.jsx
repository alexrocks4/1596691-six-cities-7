import React from 'react';
import PropTypes from 'prop-types';
import locationProp from '../../prop-types/location.prop';

const MAP_HEIGHT = '732px';

function Map({ city, points, selectedPoint }) {
  return (
    <div style={{height: MAP_HEIGHT}}></div>
  );
}

Map.propTypes = {
  city: locationProp.isRequired,
  points: PropTypes.arrayOf(locationProp).isRequired,
  selectedPoint: locationProp.isRequired,
};

export default Map;
