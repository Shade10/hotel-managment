import React, { Component } from "react";
import "./App.css";
import { Route, NavLink, withRouter } from "react-router-dom";
import HomeView from "../HomeView/HomeView";
import { Button, Modal, Header, Image } from "semantic-ui-react";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="nav">
            <div className="navigation" />
            <ul>
              <li>
                <NavLink exact to="/">
                  Strona Główna
                </NavLink>
              </li>
            </ul>
          </div>
          <Route exact path="/" component={() => <HomeView />} />
        </header>
      </div>
    );
  }
}

export default withRouter(App);
