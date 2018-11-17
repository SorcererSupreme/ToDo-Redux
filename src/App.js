import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Container from './components/Container.js';
import {BrowserRouter as Router} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Container></Container>
        </div>
      </Router>
    );
  }
}

export default App;
