import React, { Component } from "react";
import Button from "./components/Button";
import Character from "./components/Character";
import image from "./img/rick-and-morty.png";

import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: {}
    };
  }

  render() {
    return (
      <div className="App">
        <img src={image} alt="h" width="200" />
        <h2 className="title">Character generator</h2>
        <Character />
        <Button />
      </div>
    );
  }
}

export default App;
