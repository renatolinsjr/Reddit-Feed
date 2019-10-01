import React from 'react';
import './styles.css';

export default function Buttons() {
  return (
    <div className="row">
        <div className="col">
            <div className="container">
                <div className="btns">
                    <button className="tabs ativo">HOT</button>
                    <button className="tabs">NEWS</button>
                    <button className="tabs">RISING</button>
                </div>
            </div>
        </div>
    </div>
  );
}
