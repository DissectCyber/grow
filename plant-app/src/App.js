
import './App.css';
import React from 'react';
import TemperatureChart from './TemperatureChart';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Welcome to my plant monitoring website.
        </h1>
	  <p>
	  In this website I will be showing data on what is going with a plant that I will be growing
	  </p>
	  <h2>Plant Temperature Over 5 Days</h2>
	  <TemperatureChart />
      </header>
    </div>
  );
}

export default App;

