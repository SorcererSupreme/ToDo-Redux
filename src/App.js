import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Container from './components/Container.js';
import { Provider } from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';
import { createStore } from 'redux';
import RootReducer from './redux/reducers/RootReducer'

class App extends Component {
  render() {
    return (
      <Provider store = {createStore(RootReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())}>
        <Router>
          <div className="App">
            <Container></Container>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
