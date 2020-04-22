import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state ={
    persons:[
      {name:"Stefan",age:25},
      {name:"Martin",age:22},
      {name:"Peter",age:22},
    ]
  }
  switchNameHandler = () =>{
    this.setState({persons:[
      {name:"Steve",age:25},
      {name:"Martin",age:22},
      {name:"Peter",age:22}
    ]

    })
  }
  render() {
    return (
     <div className="App">
       <h1>Hi, my name is Stefan Hancar </h1>
       <p>I live in Presov</p>
       <button onClick={this.switchNameHandler}>Switch Name</button>
       <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
       <Person name ={this.state.persons[1].name} age={this.state.persons[1].age}/>
       <Person name ={this.state.persons[2].name} age={this.state.persons[2].age}>My hobbies are : programming</Person>
      </div>);
   //  return React.createElement('div',{className:'App'},React.createElement('h1',null,'Hi,I \'m Stefan'));
  }
}

export default App;
