import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
     <div className="App">
       <h1>Hi, my name is Stefan Hancar and I am {Math.floor(Math.random() * 30)} years old</h1>
       <p>I live in Presov</p>
       <Person />
       <Person />
       <Person />
      </div>);
   //  return React.createElement('div',{className:'App'},React.createElement('h1',null,'Hi,I \'m Stefan'));
  }
}

export default App;
