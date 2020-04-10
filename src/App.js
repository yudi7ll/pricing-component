import React, { useState } from 'react';
import './App.css';

// pricing card template
function PricingComponent({ title, price, features = [] }) {
  const Features = () => features.map(feature => (
    <li key={feature}>{ feature }</li>
  ));
  
  return (
    <div className="pricing">
      <div className="pricing__box pricing__basic">
        <h3>{ title }</h3>
        <h2 className="pricing__price">
          $<span>{ price }</span>
        </h2>
        <ul className="pricing__offers">
          <Features />
        </ul>
        <div className="pricing__btn">
          <button type="button" onClick={ () => document.location.reload() }>LEARN MORE</button>
        </div>
      </div>
    </div>
  );
}

const dataMonthly = [
  {
    title: 'Basic',
    price: '19.99',
    features: [
      '500 GB Storage',
      '2 Users Allowed',
      'Send up to 3 GB'
    ]
  }, {
    title: 'Professional',
    price: '24.99',
    features: [
      '1 TB Storage',
      '5 Users Allowed',
      'Send up to 10 GB'
    ]
  }, {
    title: 'Master',
    price: '39.99',
    features: [
      '2 TB Storage',
      '10 Users Allowed',
      'Send up to 20 GB'
    ]
  }
];

// change price value of pricingMonthly
const dataAnnually = ['199.99', '249.99', '399.99']
  .map((price, i) => ({...dataMonthly[i], price}));

// main app
function App() {
  // state
  const [typeMonthly, setTypeMonthly] = useState(true);
  // toggle state
  const toggleTypeMonthly = e => setTypeMonthly(e.target.checked);

  // renderable pricing
  const Pricing = () => (typeMonthly ? dataMonthly : dataAnnually).map(({ title, price, features }) => (
    <PricingComponent
      key={title}
      title={title}
      price={price}
      features={features}
    />
  ));

  return (
    <>
      <h1>Our Pricing</h1>
      <div className="switch">
        <h4 className="switch__text">Annually</h4>
        <label className="switch__box">
          <input type="checkbox"
            defaultChecked
            onChange={toggleTypeMonthly}
          />
          <span className="switch__slider"></span>
        </label>
        <h4 className="switch__text">Monthly</h4>
      </div>
      <div className="pricing-card">
        <Pricing />
      </div>
    </>
  );
}

export default App;
