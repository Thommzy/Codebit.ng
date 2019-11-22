import React, { Component, Fragment } from "react";
import "./App.css";
import Home from "./Pages/Home";
import { Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import { Container } from "semantic-ui-react";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Navbar />
        <Route exact path="/" component={Home} />
      </Fragment>
    );
  }
}

export default App;
