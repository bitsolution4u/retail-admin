import React from 'react';
import './round-loader.css';

const RoundLoader = () => {
  return (
    <div className="loader-mian-sec">
      <div class="container">
        <div class="ring"></div>
        <div class="ring"></div>
        <div class="ring"></div>
        <div class="ring"></div>
        <div class="loading">Loading...</div>
      </div>
    </div>
  );
};

export default RoundLoader;
