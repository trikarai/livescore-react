import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
// import logo from './logo.svg';
import "./App.css";

import MatchFixture from "./component/MatchFixture";

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" render={() => <MatchFixture />}></Route>
        </Switch>
      </BrowserRouter>
    );
  }
}
