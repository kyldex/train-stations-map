import { FC } from 'react';

import './App.scss';

import Map from './map/Map';

const App: FC = () => {
  return (
    <div className="app-container">
      <h1>FRÉQUENTATION DES GARES PAR ANNÉES</h1>
      <Map />
    </div>
  );
};

export default App;
