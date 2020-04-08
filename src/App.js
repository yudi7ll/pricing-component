import React from 'react';
import './App.css';

function App() {
  return (
    <>
      <h1>Our Pricing</h1>
      <div className="switch">
        <h5 className="switch__text">Annually</h5>
        <label className="switch__box">
          <input type="checkbox" />
          <span className="switch__slider"></span>
        </label>
        <h5 className="switch__text">Monthly</h5>
      </div>
    </>
  );
}

export default App;
