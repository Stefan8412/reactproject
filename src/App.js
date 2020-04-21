import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    //return (
    //  <div className="App">
     //  <h1>Hi, my name is Stefan Hancar</h1>
     // </div>
     return React.createElement('div',{className:'App'},React.createElement('h1',null,'Hi,I \'m Stefan'));
  }
}

export default App;
