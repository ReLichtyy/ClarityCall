import React from 'react';
import './css/App.css';
import logo from './images/logo.png';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="Clarity Call" />
        <h1>Clarity Call</h1>
        <p>Mentor booking platform</p>
      </header>
    </div>
  );
}

export default App;
