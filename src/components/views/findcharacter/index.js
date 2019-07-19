import React, { Component } from "react";
import { Fragment } from "react";
import { withApollo } from "react-apollo";

import CharacterList from "./components/character-list";
import FormCharacter from "./components/form-character";
import GET_CHARACTER from "./requests";
import NoResults from "../../common/noresults";

class FindCharacter extends Component {
  state = {
    error: false,
    loading: false,
    filter: {},
    results: []
  };

  handleSubmit = async e => {
    const { filter } = this.state;
    const { client } = this.props;

    e.preventDefault();

    this.setState({
      loading: true
    });

    const { data } = await client.query({
      query: GET_CHARACTER,
      variables: { filter }
    });

    if (data) {
      const { results } = data.characters;
      this.setState({
        results,
        loading: false
      });
      return;
    }

    this.setState({ error: true });
  };

  handleChange = e => {
    const {
      target: { name: key, value }
    } = e;
    const { filter } = this.state;

    this.setState({ filter: { ...filter, [key]: value } });
  };

  render() {
    const { results, loading } = this.state;
    return (
      <Fragment>
        <FormCharacter
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
        />
        {results === null ? (
          <NoResults>no data</NoResults>
        ) : (
          <CharacterList results={results} loading={loading} />
        )}
      </Fragment>
    );
  }
}

export default withApollo(FindCharacter);
