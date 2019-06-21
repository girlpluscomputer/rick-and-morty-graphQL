import React, { Component } from "react";
import Button from "./components/Button";
import Character from "./components/Character";
import logo from "./img/rick-and-morty.png";

import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      error: null,
      data: {
        origin: {},
        location: {}
      }
    };
  }
  componentDidMount() {
    this.fetchCharacters();
  }

  randomCharacter = () => {
    return Math.floor(Math.random() * (493 - 1) + 1);
  };

  fetchCharacters = async () => {
    this.setState({ loading: true, error: null });

    const random = this.randomCharacter();

    try {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character/${random}`
      );

      const data = await response.json();
      // console.log(data);
      this.setState({
        data: data,
        loading: false
      });
    } catch (error) {
      this.setState({
        loading: false,
        error: error
      });
      console.log(error);
    }
  };

  handleclick = e => {
    console.log("Clicked");
  };

  render() {
    const {
      id,
      image,
      name,
      status,
      species,
      location,
      origin
    } = this.state.data;
    return (
      <div className="App">
        <img src={logo} alt="logo" width="250" />
        <h2 className="title">Character generator</h2>
        <Character
          id={id}
          image={image}
          name={name}
          status={status}
          species={species}
          location={location.name}
          origin={origin.name}
        />
        <Button fetchCharacters={this.fetchCharacters} />
      </div>
    );
  }
}

export default App;
