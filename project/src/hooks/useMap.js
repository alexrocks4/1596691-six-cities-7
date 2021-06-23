import { useEffect, useState } from 'react';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';

function useMap(mapRef, location) {
  const [ map, setMap ] = useState(null);

  useEffect(() => {
    if (mapRef.current !== null && map === null) {

      const mapInstance = leaflet.map(mapRef.current, {
        center: {
          lat: location.latitude,
          lng: location.longitude,
        },
        zoom: location.zoom,
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

    // Always set new center if map exists
    if (mapRef.current !== null && map !== null) {
      map.setView({
        lat: location.latitude,
        lng: location.longitude,
      }, location.zoom);
    }

  }, [ mapRef, location, map ]);


  return map;
}

export default useMap;
