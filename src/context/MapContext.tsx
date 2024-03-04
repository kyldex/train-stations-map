import {
  createContext,
  FC,
  MutableRefObject,
  ReactNode,
  useContext,
  useRef
} from 'react';
import { Map } from 'maplibre-gl';

type MapContextType = {
  mapRef: MutableRefObject<Map | null>;
};

const MapContext = createContext<MapContextType | undefined>(undefined);

export const useMapContext = () => {
  const context = useContext(MapContext);
  if (typeof context === 'undefined') {
    throw new Error(
      'useMapContext must be used within a MapProvider with initialized values.'
    );
  }
  return context;
};

type ProviderProps = {
  children: ReactNode;
};

export const MapProvider: FC<ProviderProps> = ({ children }) => {
  const mapRef = useRef(null);

  return (
    <MapContext.Provider
      value={{
        mapRef
      }}
    >
      {children}
    </MapContext.Provider>
  );
};
