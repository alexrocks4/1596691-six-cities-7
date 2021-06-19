import React, { useRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import locationProp from '../../prop-types/location.prop';
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
  const [ map, setMap ] = useState(null);
  const mapRef = useRef(null);

  useEffect(() => {
    if (mapRef.current !== null && map === null) {

      const mapInstance = leaflet.map(mapRef.current, {
        center: {
          lat: city.location.latitude,
          lng: city.location.longitude,
        },
        zoom: city.location.zoom,
        zoomControl: false,
        marker: true,
      });

      leaflet
        .tileLayer(
          'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
          {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
          },
        )
        .addTo(mapInstance);

      setMap(mapInstance);
    }
  }, [ mapRef, city, map ]);

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
