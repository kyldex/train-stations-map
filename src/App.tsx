import { FC } from 'react';

import './App.scss';

import Map from './map/Map';

const App: FC = () => {
  return (
    <div className="app-container">
      <h1>TRAIN STATIONS</h1>
      <Map />
    </div>
  );
};

export default App;
