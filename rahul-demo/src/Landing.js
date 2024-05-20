import React from 'react';
import { Link } from 'react-router-dom';
import './Landing.css';  

function LandingPage() {
  return (
    <div className="landing-container">
      <div className="landing-content">
        <h1 className="landing-title">Welcome</h1>
        <div className="landing-buttons">
          <button className="landing-button">Document Master</button>
          <Link to="/home-page">
            <button className="landing-button">Document Manager</button>
          </Link>
          <button className="landing-button">Admin Panel</button>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
