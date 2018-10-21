import React, { Component } from 'react';
import logo from './images/butter.png';
import googleLogin from './images/google-login.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Butter</h1>
          <p>
            because, there's none in the fridge!
          </p>
          <a href='google.com'><img src={googleLogin} className="google-btn" alt="Log in with Google" /></a>
        </header>
      </div>
    );
  }
}

export default App;
 