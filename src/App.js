import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';
import UserOutput from './UserOutput/UserOutput';
import UserInput from './UserInput/UserInput';

class App extends Component {
  state ={
    persons:[
      {name:"Stefan",age:25},
      {name:"Martin",age:22},
      {name:"Peter",age:22},
    ],
    UserOutputs:[
      {userName:"Web-Steve"}
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
  usernameChangeHandler = (event) =>{
this.setState({UserOutputs:[
  {userName:event.target.value}
]

})
  }
  render() {
const style ={
  backgroundColor:'white',
  font:'inherit',
  border:'1px solid blue',
  padding:'8px'
};

    return (
     <div className="App">
       <h1>Hi, my name is Stefan Hancar </h1>
       <p>I live in Presov</p>
       <button style={style} onClick={this.switchNameHandler}>Switch Name</button>
       <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
       <Person name ={this.state.persons[1].name} age={this.state.persons[1].age}/>
       <Person name ={this.state.persons[2].name} age={this.state.persons[2].age}>My hobbies are : programming</Person>
       <UserInput changed={this.usernameChangeHandler} />
       <UserOutput userName={this.state.UserOutputs[0].userName} />
       <UserOutput userName={this.state.UserOutputs[0].userName} />
       <UserOutput userName="Steve" />
      </div>);
   //  return React.createElement('div',{className:'App'},React.createElement('h1',null,'Hi,I \'m Stefan'));
  
   

  }
 }

export default App;
