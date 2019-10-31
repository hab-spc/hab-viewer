import React, {useState, useEffect} from 'react';
import './App.css';
import Mosaic from './components/Mosaic';

const App: React.FC = () => {

  // assume we got img data from DB
  let imgDat = ["sampleImg.jpeg", "Prorocentrum Michan"];

  return (
    <div className="App">
      <Mosaic images={imgDat} />
    </div>
  );
}

export default App;
