import React, { Component, Fragment } from 'react';
import { withApollo } from 'react-apollo';
import CardLocation from '../common/card-location';
import Button from '../common/button';
import HistorialButton from '../common/historial-button';
import Historial from '../common/historial';
import GET_RANDOM_LOCATION from './requests';

class RandomLocation extends Component {
  state = {
    show: false,
    loading: false,
    error: false,
    data: {},
    locations: [],
  };

  componentDidMount = () => this.fetchLocations();

  randomLocation = () => Math.floor(Math.random() * (76 - 1) + 1);

  handleHistorial = e => {
    const { show } = this.state;
    this.setState({
      show: !show,
    });
  };

  fetchLocations = async e => {
    const { client } = this.props;
    const { locations: locationsState } = this.state;

    this.setState({
      loading: true,
    });

    const { data } = await client.query({
      query: GET_RANDOM_LOCATION,
      variables: { random: this.randomLocation() },
    });

    if (data) {
      const { location } = data;
      let locations = [...locationsState];

      if (!locationsState.find(loc => loc.id === location.id)) {
        locations = [...locationsState, location];
      }

      this.setState({
        data,
        loading: false,
        locations,
      });
      return;
    }
  };

  render() {
    const { data, show, locations, loading } = this.state;

    return (
      <Fragment>
        <CardLocation data={data} loading={loading} />
        <Button text="Generate" handleClick={this.fetchLocations} />
        <HistorialButton handleHistorial={this.handleHistorial} />
        <Historial show={show} data={locations} handleHistorial={this.handleHistorial} />
      </Fragment>
    );
  }
}

export default withApollo(RandomLocation);
