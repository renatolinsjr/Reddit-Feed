import React from 'react';

import logo from './../../assets/loading.png';
import './styles.css';

const Loading = () => {
  return (
    <div className="loadingContainer">
      <img src={logo} alt="Loading" className="loading"/>
    </div>
  );
}

export default Loading;