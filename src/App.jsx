import React, { useState, useEffect } from 'react';
import './App.css';
import './Modal.css';
import Mosaic from './components/Mosaic';
import Query from './components/Query';
import Filter from './components/Filter';
import Annotate from './components/Annotate';
import Options from './components/Options';

// Used for react-bootstrap modal
// import 'bootstrap/dist/css/bootstrap.css';

import axios from 'axios';

// parent component
// handles img state
// TODO add dynamic filter upon new annotation
// onFilterChange clear selected
const App = () => {
  // define image state
  const [imgs, setImages] = useState([]);
  const [dateStart, setDateStart] = useState('');
  const [dateEnd, setDateEnd] = useState('');
  const [currClass, setCurrClass] = useState('All');
  const [currAnnotClass, setCurrAnnotClass] = useState('');
  const [classList, setClassList] = useState([]);
  const [viewAnnotate, setViewAnnotate] = useState(false);
  const [annotClassList, setAnnotClassList] = useState([]);
  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const [expert, setExpert] = useState(false);

  // get annotClassList from json
  useEffect(() => {
    axios.get('http://localhost:3002/api/annot-list').then(res => {
      setAnnotClassList(res.data.classList);
    });
  }, []);

  // get images from server on query
  const handleDateSubmit = e => {
    e.preventDefault();
    // get date and time range
    const DateTimeStr = dateStart + ' ' + dateEnd;

    // get all images from that date, and time
    axios
      .get(`http://localhost:3002/api/imgs/${DateTimeStr}`)
      .then(res => {
        if (res.data.data === []) {
          alert('No images received! \n Check the dates entered');
        }
        setImages(res.data.data);
        // compute list of classes from response
        setClassList([
          'All',
          ...new Set(res.data.data.map(img => img.ml_prediction))
        ]);
      })
      .catch(err => {
        alert(`Error Occured: ${err}`);
      });
  };

  // update date
  const onDateChange = e => {
    let dateStr = e.target.value;

    if (e.target.name === 'date-start') {
      setDateStart(dateStr);
    } else {
      setDateEnd(dateStr);
    }
  };

  // update current class
  const onClassChange = e => {
    let selectedClass = e.target.value;
    setCurrClass(selectedClass);
  };

  // update current annotation class
  const onAnnotClassChange = e => {
    let selectedClass = e.target.value;
    setCurrAnnotClass(selectedClass);
  };

  // change mosaic to render based on annotation
  const onViewChange = e => {
    setViewAnnotate(!viewAnnotate);
  };

  // rerender the view
  const reRender = imgs => {
    setImages(imgs);
  };

  /** LOGIN LOGIC */
  // check for login
  useEffect(() => {
    let savedUser = localStorage.getItem('user');
    if (savedUser && savedUser === 'sarah') {
      setLoggedIn(true);
      setExpert(false);
    } else if (savedUser && savedUser === 'melissa') {
      setLoggedIn(true);
      setExpert(true);
    }
  }, []);

  const handleUserChange = e => {
    setUser(e.target.value);
  };

  const handlePassChange = e => {
    setPass(e.target.value);
  };

  const handleLogout = e => {
    setLoggedIn(false);
    localStorage.clear();
  };

  // for now save user role to localstorage
  const handleSubmit = e => {
    e.preventDefault();
    if (user === 'sarah' && pass === 'sarah') {
      setLoggedIn(true);
      setExpert(false);
      localStorage.setItem('user', 'sarah');
    } else if (user == 'melissa' && pass === 'melissa') {
      setLoggedIn(true);
      setExpert(true);
      localStorage.setItem('user', 'melissa');
    }
  };

  return (
    <>
      {loggedIn ? (
        <div className="App">
          <Query
            onDateChange={onDateChange}
            handleDateSubmit={handleDateSubmit}
          />
          <hr />
          <div className="view-toolbar">
            <Filter
              classList={classList}
              onClassChange={onClassChange}
              currClass={currClass}
            />
            <Annotate
              classList={annotClassList}
              onAnnotClassChange={onAnnotClassChange}
              currAnnotClass={currAnnotClass}
              viewAnnotate={viewAnnotate}
              onViewChange={onViewChange}
              expert={expert}
            />
          </div>
          <Options setAnnotClassList={setAnnotClassList} />
          <hr />
          <Mosaic
            images={imgs}
            currClass={currClass}
            currAnnotClass={currAnnotClass}
            viewAnnotate={viewAnnotate}
            reRender={reRender}
            expert={expert}
          />
          <button className="logout-btn" onClick={handleLogout}>
            Logout
          </button>
        </div>
      ) : (
        <div className="login-container">
          <form onSubmit={handleSubmit}>
            <div>
              <input
                type="text"
                placeholder="Username"
                value={user}
                onChange={handleUserChange}
              />
            </div>
            <div>
              <input
                type="password"
                placeholder="Password"
                value={pass}
                onChange={handlePassChange}
              />
            </div>
            <input type="submit" value="Login" className="login-btn" />
          </form>
        </div>
      )}
    </>
  );
};

export default App;
