import React, { Component } from 'react';
import './App.css';
import GameBoardContainer from "./components/GameBoardContainer";
import Jumbotron from "./components/Jumbotron";

class App extends Component {
  render() {
    return (
      <div className="container">
        <Jumbotron />
        <GameBoardContainer />
      </div>
    );
  }
}

export default App;
