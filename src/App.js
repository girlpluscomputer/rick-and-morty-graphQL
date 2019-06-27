import React, { Component, Fragment } from "react";
import Button from "./components/button";
import Character from "./components/character";
import Logo from "./img/rick-and-morty.png";
import historialButtonImg from "./img/history-solid.svg";
import PageLoading from "./components/pageloading";
import Historial from "./components/historial";
import { MainContainer, HistorialButton, Title } from "./elements";
import { Query } from "react-apollo";
import gql from "graphql-tag";

class App extends Component {
  state = {
    show: false,
    loading: false,
    error: null,
    character: {},
    characters: [],
    query: gql`
      {
        character(id: 0) {
          id
          name
          image
          status
          species
          location {
            name
          }
          origin {
            name
          }
        }
      }
    `
  };

  randomCharacter = () => {
    return Math.floor(Math.random() * (493 - 1) + 1);
  };

  componentDidMount() {
    const query = gql`
    {
      character(id: ${this.randomCharacter()}) {
        id
        name
        image
        status
        species
        location {
          name
        }
        origin {
          name
        }
      }
    }
  `;

    this.setState({
      query
    });
  }

  generateCharacter = () => {
    const query = gql`
    {
      character(id: ${this.randomCharacter()}) {
        id
        name
        image
        status
        species
        location {
          name
        }
        origin {
          name
        }
      }
    }
  `;

    this.setState({
      query
    });
  };

  // componentDidUpdate = (prevProps, prevState) => {
  //   const { character } = this.state;
  //   if (prevState.character !== character) {
  //     console.log("Character changed");
  //   }
  // };

  handleHistorial = e => {
    const { show } = this.state;
    this.setState({
      show: !show
    });
  };

  // fetchCharacters = async () => {
  //   const { characters: charactersState } = this.state;
  //   const random = this.randomCharacter();

  //   this.setState({ loading: true });

  //   try {
  //     const response = await fetch(
  //       `https://rickandmortyapi.com/api/character/${random}`
  //     );

  //     const character = await response.json();
  //     let characters = [...charactersState];

  //     if (!charactersState.find(chara => chara.id === character.id)) {
  //       characters = [...charactersState, character];
  //     }
  //     //Valida que el personaje no exista en la lista de personajes

  //     this.setState({
  //       character: character,
  //       characters
  //     });
  //   } catch (error) {
  //     this.setState({
  //       error
  //     });
  //   } finally {
  //     this.setState({
  //       loading: false
  //     });
  //   }
  // };

  render() {
    const { show, characters, query } = this.state;

    return (
      <Query query={query}>
        {({ loading, error, data }) => {
          if (loading) return <PageLoading />;
          if (error) return "Error";
          return (
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
                <Character character={data.character} />
                <Button onClick={this.generateCharacter}>Generate</Button>
              </MainContainer>
              <Historial
                show={show}
                characters={characters}
                handleHistorial={this.handleHistorial}
              />
            </Fragment>
          );
        }}
      </Query>
    );
  }
}

export default App;
