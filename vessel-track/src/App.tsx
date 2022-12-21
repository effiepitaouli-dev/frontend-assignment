import React, { useState } from 'react';
import logo from './logo.svg';
import { Map } from './components/Map';
import { MapContext } from './contexts/MapContext';
import './App.css';

function App() {
  // Initialize the map configuration and data
  const [config, setConfig] = useState({
    center: [51.505, -0.09],
    zoom: 13,
  });
  const [data, setData] = useState([]);

  return (
    <>
      <header>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <main>
        <MapContext.Provider value={{ config, data }}>
          <Map />
        </MapContext.Provider>
      </main>
    </>
  );
}

export default App;
