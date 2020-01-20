import React from 'react';
import { useState, useEffect } from 'react';

const Login = props => {
  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const [expert, setExpert] = useState(false);

  // check for login
  useEffect(() => {
    user = localStorage.getItem('user');
    if (user && user === 'sarah') {
      setLoggedIn(true);
      setExpert(false);
    } else if (user && user === 'melissa') {
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
    <div className="login-container">
      <form onSubmit={hadnleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={user}
          onChange={handleUserChange}
        />
        <input
          type="password"
          placeholder="Password"
          value={pass}
          onChange={handlePasChange}
        />
        <input type="submit" value="Login" className="login-btn" />
      </form>
    </div>
  );
};

export default Login;
