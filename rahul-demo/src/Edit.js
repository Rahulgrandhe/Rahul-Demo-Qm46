

import React, { useState, useEffect } from 'react';
import './Edit.css';

const Toolbar = () => {
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const currentTime = new Date().toLocaleTimeString();
      setCurrentTime(currentTime);
    };
    updateTime();
    const intervalId = setInterval(updateTime, 1000);
    return () => clearInterval(intervalId);
  }, []);

  const handleE2ButtonClick = () => {
    console.log('E2 button clicked');
  };

  const handleFxButtonClick = () => {
    console.log('fx button clicked');
  };

  const handleDmsButtonClick = () => {
    console.log('DMS button clicked');
  };

  const handleBackButtonClick = () => {
    console.log('Back button clicked');
  };

  const handleForwardButtonClick = () => {
    console.log('Forward button clicked');
  };

  const handleReloadButtonClick = () => {
    console.log('Reload button clicked');
  };

  const handleSearchButtonClick = () => {
    console.log('Search button clicked');
  };

  return (
    <div className="toolbar">
      <div className="toolbar-group">
        <button className="toolbar-button" onClick={handleE2ButtonClick}>E2</button>
        <button className="toolbar-button" onClick={handleFxButtonClick}>fx</button>
        <button className="toolbar-button" onClick={handleDmsButtonClick}>DMS</button>
      </div>
      <div className="toolbar-group">
        <button className="toolbar-button" onClick={handleBackButtonClick}>&larr;</button>
        <button className="toolbar-button" onClick={handleForwardButtonClick}>&rarr;</button>
        <button className="toolbar-button" onClick={handleReloadButtonClick}>&circlearrow;</button>
      </div>
      <div className="toolbar-group">
        <span>{currentTime}</span>
      </div>
      <div className="toolbar-group">
        <button className="toolbar-button" onClick={handleSearchButtonClick}>Search</button>
        <input type="search" placeholder="Type here to search" />
      </div>
    </div>
  );
};

export default Toolbar;