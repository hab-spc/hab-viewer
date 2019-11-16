import React, {useState, useEffect} from 'react';
import './App.css';
import Mosaic from './components/Mosaic';

import axios from 'axios';
import Query from './components/Query';

const App = () => {

  // define image state
  const [imgs, setImages] = useState([]);
  const [dateStart, setDateStart] = useState('');
  const [dateEnd, setDateEnd] = useState('');
  const [timeStart, setTimeStart] = useState('');
  const [timeEnd, setTimeEnd] = useState('');

  // get images from server on query
  const handleDateSubmit = (e) => {
    
    e.preventDefault();
    // get date and time range
    const DateTimeStr = 
      dateStart + " " +
      dateEnd + " " +
      timeStart + " " +
      timeEnd + " ";

    // get all images from that date, and time
    axios
      .get(`http://localhost:8080/api/imgs/${DateTimeStr}`)
      .then(res => {
        setImages(res.data);
      });

  }

  // update time
  const onTimeChange = (e) => {
    let timeStr = e.target.value;
    console.log(timeStr);

    if(e.target.name === "time-start"){    
      setTimeStart(timeStr);
    } else {
      setTimeEnd(timeStr);
    }
  }

  // update date
  const onDateChange = (e) => {
    let dateStr = e.target.value;
    console.log(dateStr);
    
    if(e.target.name === "date-start"){    
      setDateStart(dateStr);
    } else {
      setDateEnd(dateStr);
    }

  }

  return (
    <div className="App">
      <Query 
          onDateChange={onDateChange} 
          onTimeChange={onTimeChange}
          handleDateSubmit={handleDateSubmit} />
      <Mosaic images={imgs} />
    </div>
  );
}

export default App;
