import React, { Fragment } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import FindCharacter from './components/findcharacter';
import FindLocation from './components/findlocation';
import RandomCharacter from './components/randomcharacter';
import RandomLocation from './components/randomlocation';
import Navbar from './components/common/navbar';
import Header from './elements';
import Home from './components/home';

function App() {
  return (
    <Fragment>
      <Header>
        <Navbar />
      </Header>
      <Switch>
        <Route path="/find-character" component={FindCharacter} />
        <Route path="/find-location" component={FindLocation} />
        <Route path="/random-character" component={RandomCharacter} />
        <Route path="/random-location" component={RandomLocation} />
        <Redirect to="/find-character" />
      </Switch>
    </Fragment>
  );
}

export default App;
