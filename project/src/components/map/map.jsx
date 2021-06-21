import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import locationProp from '../../prop-types/location.prop';
import useMap from '../../hooks/useMap';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';

const MAP_HEIGHT = '100%';
const defaultMarkerConfig = {
  iconUrl: 'img/pin.svg',
  iconSize: [27, 39],
  iconAnchor: [13.5, 39],
};
const activeMarkerConfig = {
  iconUrl: 'img/pin-active.svg',
  iconSize: [27, 39],
  iconAnchor: [13.5, 39],
};

const defaultIcon = leaflet.icon(defaultMarkerConfig);
const activeIcon = leaflet.icon(activeMarkerConfig);

function Map({ city, points, selectedPoint }) {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city.location);

  useEffect(() => {
    if (map) {
      points.forEach(({ location, id }) => {
        leaflet.marker([ location.latitude, location.longitude ], {
          icon: selectedPoint && id === selectedPoint.id ? activeIcon : defaultIcon,
        }).addTo(map);
      });
    }
  }, [map, points, selectedPoint ]);

  return (
    <div
      style={{height: MAP_HEIGHT}}
      ref={mapRef}
    />
  );
}

Map.propTypes = {
  city: locationProp.isRequired,
  points: PropTypes.arrayOf(locationProp).isRequired,
  selectedPoint: locationProp,
};

export default Map;
