import React, {useState, useEffect} from 'react';
import './App.css';
import Mosaic from './components/Mosaic';
import Query from './components/Query';
import Filter from './components/Filter';
import Annotate from './components/Annotate';

import axios from 'axios';


const App = () => {

  // define image state
  const [imgs, setImages] = useState([]);
  const [dateStart, setDateStart] = useState('');
  const [dateEnd, setDateEnd] = useState('');
  const [timeStart, setTimeStart] = useState('');
  const [timeEnd, setTimeEnd] = useState('');
  const [currClass, setCurrClass] = useState('All');
  const [currAnnotClass, setCurrAnnotClass] = useState('');
  const [classList, setClassList] = useState([]);
  const [viewAnnotate, setViewAnnotate] = useState(false);

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
      .get(`http://gpu2:3002/api/imgs/${DateTimeStr}`)
      .then(res => {
        setImages(res.data.data);
        // compute list of classes from response
        setClassList(['All', ...new Set(res.data.data.map(img => img.ml_prediction))]);
      });
  }

  // update time
  const onTimeChange = (e) => {
    let timeStr = e.target.value;

    if(e.target.name === "time-start"){    
      setTimeStart(timeStr);
    } else {
      setTimeEnd(timeStr);
    }
  }

  // update date
  const onDateChange = (e) => {
    let dateStr = e.target.value;
    
    if(e.target.name === "date-start"){    
      setDateStart(dateStr);
    } else {
      setDateEnd(dateStr);
    }
  }

  // update current class
  const onClassChange = (e) => {
    let selectedClass = e.target.value;
    console.log(selectedClass);
    setCurrClass(selectedClass);
  }

  // update current annotation class
  const onAnnotClassChange = (e) => {
    let selectedClass = e.target.value;
    setCurrAnnotClass(selectedClass);
  }

  // change mosaic to render based on annotation
  const onViewChange = (e) => {
    setViewAnnotate(!viewAnnotate);
  }

  return (
    <div className="App">
      <Query 
          onDateChange={onDateChange} 
          onTimeChange={onTimeChange}
          handleDateSubmit={handleDateSubmit} />
      <hr />
      <div className="view-toolbar">
        <Filter 
          classList={classList}
          onClassChange={onClassChange} 
          currClass={currClass}
        />
        <Annotate 
          classList={classList}
          onAnnotClassChange={onAnnotClassChange}
          currAnnotClass={currAnnotClass}
          viewAnnotate={viewAnnotate}
          onViewChange={onViewChange}
        />
      </div>
      <hr />
      <Mosaic 
        images={imgs} 
        currClass={currClass} 
        viewAnnotate={viewAnnotate}
        />
    </div>
  );
}

export default App;
