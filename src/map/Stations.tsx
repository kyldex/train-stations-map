import { FC, useEffect } from 'react';

import { useMapContext } from '../context/MapContext';

import { STATION_FOOTPRINTS_LAYER_ID } from '../utils/constants';

// Handle map methods related to stations footpints display.
const Stations: FC = () => {
  const { mapRef } = useMapContext();
  const map = mapRef.current;

  // Change the cursor to a pointer when the mouse is over a layer.
  const changeCursorToAPointer = (): void => {
    if (!map) return;
    map.getCanvas().style.cursor = 'pointer';
  };
  // Change it back to a pointer when it leaves.
  const resetCursorToDefault = (): void => {
    if (!map) return;
    map.getCanvas().style.cursor = 'auto';
  };

  useEffect(() => {
    if (map) {
      map.on('mouseenter', STATION_FOOTPRINTS_LAYER_ID, changeCursorToAPointer);
      map.on('mouseleave', STATION_FOOTPRINTS_LAYER_ID, resetCursorToDefault);
    }

    return () => {
      if (map) {
        map.off(
          'mouseenter',
          STATION_FOOTPRINTS_LAYER_ID,
          changeCursorToAPointer
        );
        map.off(
          'mouseleave',
          STATION_FOOTPRINTS_LAYER_ID,
          resetCursorToDefault
        );
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return null;
};

export default Stations;
