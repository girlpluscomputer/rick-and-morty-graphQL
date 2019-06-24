import React, { Component } from "react";
import Button from "./components/Button";
import Character from "./components/Character";
import logo from "./img/rick-and-morty.png";

import "./App.css";

class App extends Component {
  state = {
    loading: true,
    error: null,
    character: {
      origin: {},
      location: {}
    },
    characters: []
  };

  componentDidMount() {
    this.fetchCharacters();
  }

  randomCharacter = () => {
    return Math.floor(Math.random() * (493 - 1) + 1);
  };

  fetchCharacters = async () => {
    const random = this.randomCharacter();

    try {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character/${random}`
      );

      const character = await response.json();
      // console.log(character);

      const { characters } = this.state;
      const charactersList = [...characters, character];

      this.setState({
        character: character,
        loading: false,
        characters: charactersList
      });
    } catch (error) {
      this.setState({
        loading: false,
        error
      });
      console.log(error);
    }
  };

  handleclick = e => {
    console.log("Clicked");
  };

  render() {
    const { character } = this.state;
    return (
      <div className="App">
        <img src={logo} alt="logo" width="250" />
        <h2 className="title">Character generator</h2>
        <Character {...character} />

        <Button fetchCharacters={this.fetchCharacters} />
      </div>
    );
  }
}

export default App;
