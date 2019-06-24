import React, { Component, Fragment } from "react";

import Button from "./components/Button";
import Character from "./components/Character";
import Logo from "./img/rick-and-morty.png";
import HistorialButton from "./img/history-solid.svg";
import PageLoading from "./components/PageLoading";
import Historial from "./components/Historial";

import "./App.css";

class App extends Component {
  state = {
    show: false,
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

  handleHistorial = e => {
    const { show } = this.state;
    this.setState({
      show: !show
    });
  };

  fetchCharacters = async () => {
    const random = this.randomCharacter();

    try {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character/${random}`
      );

      const character = await response.json();

      const characters = this.state.characters;
      let charactersList = [];

      //Valida que el personaje no exista en la lista de personajes

      if (!characters.hasOwnProperty(character)) {
        charactersList = [...characters, character];
      }

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

  render() {
    const { character, loading, show, characters } = this.state;

    if (loading) {
      return <PageLoading />;
    }

    return (
      <Fragment>
        <div className="App">
          <img src={Logo} alt="logo" width="250" />
          <h2 className="title">Character generator</h2>
          <button className="historial-button" onClick={this.handleHistorial}>
            <img alt="history button" src={HistorialButton} width="28px" />
          </button>
          <Character {...character} />
          <Button fetchCharacters={this.fetchCharacters} />
        </div>
        <Historial
          show={show}
          characters={characters}
          handleHistorial={this.handleHistorial}
        />
      </Fragment>
    );
  }
}

export default App;
