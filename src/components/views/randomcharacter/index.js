import React, { Component } from "react";
import { withApollo } from "react-apollo";
import { Fragment } from "react";

import Button from "../../common/button";
import CardCharacter from "../../common/card-character";
import Historial from "../../common/historial";
import HistorialButton from "../../common/historial-button";

import GET_RANDOM_CHARACTER from "./request";

class RandomCharacter extends Component {
  state = {
    show: false,
    loading: false,
    error: false,
    data: {},
    characters: []
  };

  componentDidMount = () => {
    this.fetchCharacters();
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

  fetchCharacters = async e => {
    const { client } = this.props;
    const { characters: charactersState } = this.state;

    this.setState({
      loading: true
    });

    const { data } = await client.query({
      query: GET_RANDOM_CHARACTER,
      variables: { random: this.randomCharacter() }
    });

    if (data) {
      const { character } = data;
      let characters = [...charactersState];

      if (!charactersState.find(chara => chara.id === character.id)) {
        characters = [...charactersState, character];
      }

      this.setState({
        data: data,
        loading: false,
        characters
      });

      return;
    }
  };

  render() {
    const { data, show, characters, loading } = this.state;

    return (
      <Fragment>
        <CardCharacter data={data} loading={loading} />
        <Button
          bcolor="green"
          color="white"
          shape="round"
          align="center"
          text="Generate"
          handleClick={this.fetchCharacters}
        />
        <HistorialButton handleHistorial={this.handleHistorial} />
        <Historial
          show={show}
          data={characters}
          handleHistorial={this.handleHistorial}
        />
      </Fragment>
    );
  }
}

export default withApollo(RandomCharacter);
