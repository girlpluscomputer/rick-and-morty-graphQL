import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import FindCharacter from "./components/findcharacter";
import FindLocation from "./components/findlocation";
import RandomCharacter from "./components/randomcharacter";
import RandomLocation from "./components/randomlocation";
import Navbar from "./components/common/navbar";
import Header from "./elements";
import Home from "./components/home";

function App() {
  return (
    <div>
      <Router>
        <div>
          <Header>
            <Navbar />
          </Header>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/find-character" component={FindCharacter} />
            <Route path="/find-location" component={FindLocation} />
            <Route path="/random-character" component={RandomCharacter} />
            <Route path="/random-location" component={RandomLocation} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
