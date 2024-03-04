import React from 'react';
import { createRoot } from 'react-dom/client';

import 'maplibre-gl/dist/maplibre-gl.css';
import './index.html';
import './index.scss';

import { MapProvider } from './context/MapContext';
import App from './App';

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
  <React.StrictMode>
    <MapProvider>
      <App />
    </MapProvider>
  </React.StrictMode>
);
