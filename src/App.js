import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import ToDoList from './components/ToDoList.jsx';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ToDoList></ToDoList>
      </div>
    );
  }
}

export default App;
