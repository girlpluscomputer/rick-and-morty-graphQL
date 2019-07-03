import React, { Component } from "react";
import Form from "./components/form";
import GET_CHARACTER from "./components/form/requests";
import { async } from "q";

class FindCharacter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      error: false,
      loading: false,
      filter: {}
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    this.findCharacter();
  };

  findCharacter = async () => {
    const name = document.getElementsByName("name")[0].value;
    const gender = document.getElementsByName("gender")[0].value;
    const status = document.getElementsByName("status")[0].value;
    const { client } = this.props;

    this.setState({ loading: true });

    const { data, errors } = await client.query({
      query: GET_CHARACTER,
      variables: { name: name, gender: gender, status: status }
    });

    if (data) {
    } else if (errors) {
    }
  };

  handleChangeGender = e => {
    const {
      target: { value }
    } = e;

    const gender = value;

    this.setState({
      filter: {
        gender
      }
    });
  };

  handleChangeStatus = e => {
    const {
      target: { value }
    } = e;

    const status = value;

    this.setState({
      filter: {
        status
      }
    });
  };
  handleChangeName = e => {
    const {
      target: { value }
    } = e;

    const name = value;

    this.setState({
      filter: {
        name
      }
    });
  };

  render() {
    return (
      <div>
        <Form
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
        />
      </div>
    );
  }
}

export default FindCharacter;
