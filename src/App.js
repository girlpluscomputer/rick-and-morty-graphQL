import React from "react";
import { Switch, Route } from "react-router-dom";
import { Fragment } from "react";
import { withApollo } from "react-apollo";
import FindCharacter from "./components/findcharacter";
import FindLocation from "./components/findlocation";
import RandomCharacter from "./components/randomcharacter";
import RandomLocation from "./components/randomlocation";
import Navbar from "./components/common/navbar";
import Header from "./elements";

function App(props) {
  const { client } = props.client;
  return (
    <Fragment>
      <Header>
        <Navbar />
      </Header>

      <Switch>
        <Route
          path="/find-character"
          component={FindCharacter}
          client={client}
        />
        <Route path="/find-location" component={FindLocation} client={client} />
        <Route
          path="/random-character"
          component={RandomCharacter}
          client={client}
        />
        <Route
          path="/random-location"
          component={RandomLocation}
          client={client}
        />
      </Switch>
    </Fragment>
  );
}

export default withApollo(App);
