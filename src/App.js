import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Board from "./components/Board";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Connect-Four Game</h2>
          {/* <ChooseColor /> */}
        </div>
        <div className="Game">
          <Board />
        </div>
      </div>
    );
  }
}

export default App;
