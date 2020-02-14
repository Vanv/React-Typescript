import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Message from './Message'

class App extends Component<any> {


  render() {

    // let firstValue: string = "Mike";
    //let firstValue: number = 66;
    // let firstValue: boolean = true;
    // let firstValue: number[] = [2, 3, 66];
    //let firstValue: Array<string> = ["2", "66", "Van" ];


    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {/* <p>The value {firstValue} if of {typeof firstValue} type</p> */}
          <Message name="Van" message="This is a quick message from app"/>
        </header>
      </div>
    );
  }
}

export default App;
