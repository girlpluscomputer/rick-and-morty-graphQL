import React, { Component } from "react";
import { withApollo } from "react-apollo";
import { Fragment } from "react";
import GET_LOCATION from "./requests";
import FormLocation from "./components/form";
import LocationList from "./components/location-list";
import NoResults from "../common/noresults";

class FindLocation extends Component {
  state = {
    loading: false,
    error: false,
    filter: {},
    results: []
  };

  handleSubmit = async e => {
    const { client } = this.props;
    const { filter } = this.state;

    e.preventDefault();

    this.setState({
      loading: true
    });

    const { data } = await client.query({
      query: GET_LOCATION,
      variables: { filter }
    });

    if (data) {
      const { results } = data.locations;
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
        <FormLocation
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
        />
        {results === null ? (
          <NoResults>no data</NoResults>
        ) : (
          <LocationList results={results} loading={loading} />
        )}
      </Fragment>
    );
  }
}

export default withApollo(FindLocation);
