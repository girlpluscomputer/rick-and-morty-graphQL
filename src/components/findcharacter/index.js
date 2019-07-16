import React, { Component } from "react";
import Form from "./components/form";
import Loader from "../common/loader";
import CharacterList from "./components/character-list";
import GET_CHARACTER from "./requests";
import { withApollo } from "react-apollo";
import NoResults from "./elements";

class FindCharacter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: false,
      loading: false,
      filter: {},
      results: []
    };
  }

  handleSubmit = async e => {
    const { client } = this.props;
    const { filter } = this.state;

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
    let renderComponent;

    if (results !== null) {
      if (results.length > 0) {
        renderComponent = <CharacterList results={results} />;
      }
    } else if (loading) {
      renderComponent = <Loader />;
    } else {
      renderComponent = <NoResults>No results</NoResults>;
    }

    return (
      <div>
        <Form
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
        />
        {renderComponent}
      </div>
    );
  }
}

export default withApollo(FindCharacter);
