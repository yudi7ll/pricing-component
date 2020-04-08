import React from 'react';
import './App.css';

function App() {
  return (
    <>
      <h1>Our Pricing</h1>
      <div className="switch">
        <h4 className="switch__text">Annually</h4>
        <label className="switch__box">
          <input type="checkbox" />
          <span className="switch__slider"></span>
        </label>
        <h4 className="switch__text">Monthly</h4>
      </div>

      <div className="pricing">
        <div className="pricing__box pricing__basic">
          <h3>Basic</h3>
          <h2 className="pricing__price">
            $<span>19.99</span>
          </h2>
          <ul className="pricing__offers">
            <li>500 GB Storage</li>
            <li>2 Users Allowed</li>
            <li>Send up to 3 GB</li>
          </ul>
          <div className="pricing__btn">
            <button type="button">LEARN MORE</button>
          </div>
        </div>
      </div>

      <div className="pricing">
        <div className="pricing__box pricing__box--blue">
          <h3>Professional</h3>
          <h2 className="pricing__price">
            $<span>24.99</span>
          </h2>
          <ul className="pricing__offers">
            <li>1 TB Storage</li>
            <li>5 Users Allowed</li>
            <li>Send up to 10 GB</li>
          </ul>
          <div className="pricing__btn pricing__btn--white">
            <button type="button">LEARN MORE</button>
          </div>
        </div>
      </div>

      <div className="pricing">
        <div className="pricing__box pricing__basic">
          <h3>Master</h3>
          <h2 className="pricing__price">
            $<span>39.99</span>
          </h2>
          <ul className="pricing__offers">
            <li>2 TB Storage</li>
            <li>10 Users Allowed</li>
            <li>Send up to 20 GB</li>
          </ul>
          <div className="pricing__btn">
            <button type="button">LEARN MORE</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
