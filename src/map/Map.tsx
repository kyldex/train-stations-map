import { FC, useEffect, useRef } from 'react';
import { Map as MaplibreMap } from 'maplibre-gl';

import './Map.scss';

import {
  MAP_STYLE_URL,
  PARIS_CENTER_COORDS,
  INIT_MAP_ZOOM
} from '../utils/constants';

const MAP_API_KEY = process.env.MAP_TILER_API_KEY;

// Initialize the Maplibre GL JS map object.
const Map: FC = () => {
  const mapContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (mapContainer.current) {
      const maplibreMap = new MaplibreMap({
        container: mapContainer.current,
        // create a MapTiler account
        style: `${MAP_STYLE_URL}?key=${MAP_API_KEY}`,
        center: PARIS_CENTER_COORDS,
        zoom: INIT_MAP_ZOOM
      });
    }
  }, []);

  return <div className="map-container" ref={mapContainer} />;
};

export default Map;
