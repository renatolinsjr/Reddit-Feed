import React from 'react';
import Noticia from '../Noticia/Index';

import './styles.css';
const Lista = () => {
  return (
    <div className="row">
        <div className="col">
            <div className="container">
                <ul>
                    <Noticia />
                </ul>
            </div>
        </div>
    </div>
  );
}

export default Lista