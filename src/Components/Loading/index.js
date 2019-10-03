import React from 'react';
import Skeleton from 'react-loading-skeleton';

import './styles.css';

const Loading = () => {
  return (
    // <div className="loadingContainer">
    //   <img src={logo} alt="Loading" className="loading"/>
    // </div>
    [0,1,2,3,4,5].map((_, index)=>(
    <li key={index}>
      <div className="noticia">
        <Skeleton height={64} width={64}></Skeleton>
        <div className="content">
          <Skeleton height={18} width={200}></Skeleton>
          <Skeleton height={18} width={180}></Skeleton>
          <Skeleton height={18} width={150}></Skeleton>
        </div>
      </div>
    </li>
    ))
  );
}

export default Loading;