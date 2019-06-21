import React, { Component } from "react";
import Button from "./components/Button";
import Character from "./components/Character";
import logo from "./img/rick-and-morty.png";

import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      nextPage: 1,
      loading: true,
      error: null,
      data: {
        results: []
      }
    };
  }
  componentDidMount() {
    this.fetchCharacters();
  }

  fetchCharacters = async () => {
    this.setState({ loading: true, error: null });

    try {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character?page=${this.state.nextPage}`
      );
      const data = await response.json();
      this.setState({
        data: {
          info: data.info,
          results: [].concat(this.state.data.results, data.results)
        },
        loading: false,
        nextPage: this.state.nextPage + 1
      });
      // console.log(data);
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
    // console.log(this.state.data.results.length);
  };
  render() {
    return (
      <div className="App">
        <img src={logo} alt="logo" width="250" />
        <h2 className="title">Character generator</h2>
        <Character />
        <Button handleclick={this.handleclick} />
      </div>
    );
  }
}

export default App;
