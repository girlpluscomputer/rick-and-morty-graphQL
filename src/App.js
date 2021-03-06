import React, { Fragment } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { withApollo } from "react-apollo";

import FindCharacter from "./components/views/findcharacter";
import FindLocation from "./components/views/findlocation";
import RandomCharacter from "./components/views/randomcharacter";
import RandomLocation from "./components/views/randomlocation";
import Navbar from "./components/common/navbar";
import Header from "./elements";

function App(props) {
  const { client } = props;

  return (
    <Fragment>
      <Header>
        <Navbar />
      </Header>

      <Switch>
        <Route
          path="/find-character"
          render={() => <FindCharacter client={client} />}
        />
        <Route
          path="/find-location"
          render={() => <FindLocation client={client} />}
        />
        <Route
          path="/random-character"
          render={() => <RandomCharacter client={client} />}
        />
        <Route
          path="/random-location"
          render={() => <RandomLocation client={client} />}
        />
        <Redirect to="/find-character" />
      </Switch>
    </Fragment>
  );
}

export default withApollo(App);
