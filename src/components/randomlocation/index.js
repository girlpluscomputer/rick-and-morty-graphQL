import React, { Component } from "react";
import { withApollo } from "react-apollo";
import { Fragment } from "react";
import CardLocation from "../common/card-location";
import Button from "../common/button";
import GET_RANDOM_LOCATION from "./requests";
import Loader from "../common/loader";

class RandomLocation extends Component {
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
    this.fetchLocations();
  }

  randomLocation() {
    return Math.floor(Math.random() * (493 - 1) + 1);
  }

  fetchLocations = async e => {
    const { client } = this.props;

    this.setState({
      loading: true
    });

    const { data } = await client.query({
      query: GET_RANDOM_LOCATION,
      variables: { random: this.randomLocation() }
    });

    if (data) {
      this.setState({
        data,
        loading: false
      });
      return;
    }
  };

  render() {
    const { data } = this.state;

    return (
      <Fragment>
        {Object.keys(data).length && <CardLocation data={data} />}
        <Button text="Generate" handleClick={this.fetchLocations} />
      </Fragment>
    );
  }
}

export default withApollo(RandomLocation);
