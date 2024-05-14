import logo from './logo.svg';
import './App.css';
import React from 'react';

class App extends React.Component {
  constructor(){
    super();

    this.state = {
      message: "Hello world!"
    }
  }

  render(){
    return (
      <div className="App">
        <h1> {this.state.message}</h1>
      </div>
    );
  }
}

export default App;
