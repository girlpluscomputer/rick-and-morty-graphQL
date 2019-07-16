import React, { Component } from "react";
import { withApollo } from "react-apollo";
import { Fragment } from "react";
import Card from "../common/card";
import Button from "../common/button";
import HistorialButton from "../common/historial-button";
import GET_RANDOM_CHARACTER from "./request";

class RandomCharacter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      loading: false,
      error: false,
      data: {}
    };
  }

  componentDidMount() {
    this.fetchCharacters();
  }

  randomCharacter() {
    return Math.floor(Math.random() * (493 - 1) + 1);
  }

  fetchCharacters = async e => {
    const { client } = this.props;

    this.setState({
      loading: true
    });

    const { data } = await client.query({
      query: GET_RANDOM_CHARACTER,
      variables: { random: this.randomCharacter() }
    });

    if (data) {
      this.setState({
        data: data,
        loading: false
      });
      return;
    }
  };

  render() {
    const { data } = this.state;

    return (
      <Fragment>
        {Object.keys(data).length && <Card data={data} />}
        <Button text="Generate" handleClick={this.fetchCharacters} />
      </Fragment>
    );
  }
}

export default withApollo(RandomCharacter);
