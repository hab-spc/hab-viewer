import React, {useState, useEffect} from 'react';
import './App.css';
import Mosaic from './components/Mosaic';

const App: React.FC = () => {

  // assume we got img data from DB
  let dummyArr = [1,2,3,4,5,6,7,8,9,10]
  let imgDat = dummyArr.map(elem => {
    return {src: elem + ".jpeg", pred: elem};
  });

  return (
    <div className="App">
      <Mosaic images={imgDat} />
    </div>
  );
}

export default App;
