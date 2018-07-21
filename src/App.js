import React, { Component } from "react";
import { Container } from "semantic-ui-react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import logo from "./logo.svg";
import Button from "./modules/Button";
import P from "./modules/P";
import SourceList from "./modules/sources/SourceList";
import NewsList from "./modules/news/NewsList";
import "./App.css";
import "semantic-ui-css/semantic.min.css";

const key = "2348a18e4c3248abab1d460740881ee1";

class App extends Component {
  render() {
    return (
      <Router>
        <Container>
          <Switch>
            <Route exact path="/" component={SourceList} />
            <Route path="/news/:id" component={NewsList} />
            <Route component={Button} />
          </Switch>
        </Container>
      </Router>
    );
  }
}

export default App;
