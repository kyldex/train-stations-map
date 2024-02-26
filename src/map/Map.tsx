import { FC, useEffect, useRef } from 'react';
import { Map as MaplibreMap } from 'maplibre-gl';

import './Map.scss';

// Initialize the Maplibre GL JS map object.
const Map: FC = () => {
  const mapContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (mapContainer.current) {
      const maplibreMap = new MaplibreMap({
        container: mapContainer.current,
        // create a MapTiler account
        style: ''
      });
    }
  }, []);

  return <div className="map-container" ref={mapContainer} />;
};

export default Map;
