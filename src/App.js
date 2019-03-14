import React, { Component } from 'react';
import './App.css';

import Jumbotron from 'react-bootstrap/Jumbotron';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Jumbotron fluid>
          <h1>Universe, meet Will Lucas.</h1>
          <h5>I'm an adventurous Portland native and triple threat.</h5>
        </Jumbotron>
      </div>
    );
  }
}

export default App;
