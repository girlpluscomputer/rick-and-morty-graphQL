import React, { Component, Fragment } from "react";
import Button from "./components/button";
import Character from "./components/character";
import Logo from "./img/rick-and-morty.png";
import historialButtonImg from "./img/history-solid.svg";
import PageLoading from "./components/PageLoading";
import Historial from "./components/historial";
import { MainContainer, HistorialButton, Title } from "./elements";

class App extends Component {
  state = {
    show: false,
    loading: false,
    error: null,
    character: {},
    characters: []
  };

  componentDidMount() {
    this.fetchCharacters();
  }

  componentDidUpdate = (prevProps, prevState) => {
    const { character } = this.state;
    if (prevState.character !== character) {
      console.log("Character changed");
    }
  };

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
    const { characters: charactersState } = this.state;
    const random = this.randomCharacter();

    this.setState({ loading: true });

    try {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character/${random}`
      );

      const character = await response.json();
      let characters = [...charactersState];

      if (!charactersState.find(chara => chara.id === character.id)) {
        characters = [...charactersState, character];
      }
      //Valida que el personaje no exista en la lista de personajes

      this.setState({
        character: character,
        characters
      });
    } catch (error) {
      this.setState({
        error
      });
    } finally {
      this.setState({
        loading: false
      });
    }
  };

  render() {
    const { character, loading, show, characters } = this.state;

    return (
      <Fragment>
        {loading ? (
          <PageLoading />
        ) : (
          <Fragment>
            <MainContainer>
              <img src={Logo} alt="logo" width="250" />
              <Title>Character generator</Title>
              <HistorialButton onClick={this.handleHistorial}>
                <img
                  alt="history button"
                  src={historialButtonImg}
                  width="28px"
                />
              </HistorialButton>
              <Character character={character} />
              <Button onClick={this.fetchCharacters}>Generate</Button>
            </MainContainer>
            <Historial
              show={show}
              characters={characters}
              handleHistorial={this.handleHistorial}
            />
          </Fragment>
        )}
      </Fragment>
    );
  }
}

export default App;
