import React, { Component } from "react";
import { withApollo } from "react-apollo";
import GET_LOCATION from "./requests";
import Form from "./components/form";
import LocationList from "./components/location-list";
import Loader from "../common/loader";
import NoResults from "../common/noresults";

class FindLocation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      error: false,
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
    let renderComponent;

    if (results !== null) {
      if (results.length > 0) {
        renderComponent = <LocationList results={results} />;
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

export default withApollo(FindLocation);
