import React, { Component } from 'react';
import Form from './components/form';
import GET_CHARACTER from './requests';
import { withApollo } from 'react-apollo';

class FindCharacter extends Component {
  state = {
    error: false,
    loading: false,
    filter: {},
  };

  findCharacter = async e => {
    const { client } = this.props;
    const { filter } = this.state;
    e.preventDefault();
    this.setState({ loading: true });

    debugger;

    const { data } = await client.query({
      query: GET_CHARACTER,
      variables: { filter },
    });

    debugger;

    if (data) {
      // blabla bla
      return;
    }

    this.setState({ error: true });
  };

  handleChange = e => {
    const {
      target: { name: key, value },
    } = e;
    const { filter } = this.state;

    this.setState({ filter: { ...filter, [key]: value } });
  };

  render() {
    return (
      <div>
        <Form
          handleSubmit={this.findCharacter}
          handleChange={this.handleChange}
        />
      </div>
    );
  }
}

export default withApollo(FindCharacter);

// HOC High Order Component
// withApollo > client > props > FindCharacter
