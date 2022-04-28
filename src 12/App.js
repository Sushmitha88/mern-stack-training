import logo from './logo.svg';
import './App.css';
import React from 'react'
const name = 'Sushmitha'
class App extends React.Component {
  render() {
    return (
      <div className="App">
      <h1>hello</h1> 
      <h1>sush</h1> 
      <Sush 
      name= {name}
      />
      </div>
    );
  }

  
}
class Sush extends React.Component{
  render(){
    return(
      <div>Hello Sir {this.props.name}</div>
    )
  }
}

export default App;
