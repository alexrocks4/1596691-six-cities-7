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

const addMarkerToMapLayer = (location, layer, isActiveIcon = false) => {
  const marker = leaflet.marker([ location.latitude, location.longitude ], {
    icon: isActiveIcon ? activeIcon : defaultIcon,
  });
  layer.addLayer(marker);
};

function Map({ city, points, selectedPoint }) {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city.location);

  useEffect(() => {
    const layerGroup = leaflet.layerGroup();

    if (map) {
      // Add all points to map except selectedPoint in case if
      // selectedPoint is present in points array
      points.forEach(({ location, id }) => {
        if (selectedPoint !== null && id === selectedPoint.id) {
          return;
        }

        addMarkerToMapLayer(location, layerGroup);
      });

      // Add selectedPoint to map
      if (selectedPoint !== null) {
        addMarkerToMapLayer(selectedPoint.location, layerGroup, true);
      }

      layerGroup.addTo(map);
    }

    return () => {
      if (map) {
        layerGroup.remove();
      }
    };
  }, [map, points, selectedPoint]);

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

Map.defaultProps = {
  selectedPoint: null,
};

export default Map;
