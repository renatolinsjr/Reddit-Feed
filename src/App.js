import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Buttons from './Components/Buttons';
import Lista from './Components/Lista';
import Loadmore from './Components/Loadmore';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Buttons />
      <Lista />
      <Loadmore />
    </div>
  );
}

export default App;
