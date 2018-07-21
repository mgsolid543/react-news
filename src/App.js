import React, { Component } from "react";
import logo from "./logo.svg";
import Button from "./modules/Button";
import P from "./modules/P";
import SourceList from "./modules/sources/SourceList";
import NewsList from "./modules/news/NewsList";
import "./App.css";
import "semantic-ui-css/semantic.min.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        {/*<SourceList />*/}
        <NewsList />
      </div>
    );
  }
}

export default App;
