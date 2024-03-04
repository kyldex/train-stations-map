import { FC, useEffect, useRef, useState } from 'react';
import { Map as MaplibreMap, NavigationControl } from 'maplibre-gl';

import './Map.scss';

import { useMapContext } from '../context/MapContext';
import Stations from './Stations';

import {
  MAP_BASE_URL,
  MAP_ID,
  PARIS_CENTER_COORDS,
  INIT_MAP_ZOOM
} from '../utils/constants';

const MAP_API_KEY = process.env.MAP_TILER_API_KEY;

// Initialize the Maplibre GL JS map object.
const Map: FC = () => {
  const { mapRef } = useMapContext();
  const [mapHasLoaded, setMapHasLoaded] = useState(false);
  const mapContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (mapContainer.current) {
      const maplibreMap = new MaplibreMap({
        container: mapContainer.current,
        style: `${MAP_BASE_URL}/maps/${MAP_ID}/style.json?key=${MAP_API_KEY}`,
        center: PARIS_CENTER_COORDS,
        zoom: INIT_MAP_ZOOM
      });
      maplibreMap.addControl(new NavigationControl());
      maplibreMap.on('load', () => {
        console.log(maplibreMap.getStyle());
        maplibreMap.on('moveend', () => {
          console.log(maplibreMap.getZoom());
        })
        mapRef.current = maplibreMap;
        setMapHasLoaded(true);
      });
    }
  }, []);

  return <div className="map-container" ref={mapContainer}>
    {mapHasLoaded ? <Stations /> : null}
  </div>;
};

export default Map;
