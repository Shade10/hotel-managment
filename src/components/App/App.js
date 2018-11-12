import React, { Component } from "react";
import "./App.css";
import { Route, NavLink, withRouter } from "react-router-dom";
import HomeView from "../HomeView/HomeView";
import RoomsView from "../RoomsView/RoomsView";
// import { Button, Modal, Header, Image } from "semantic-ui-react";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="nav">
            <div className="navigation">
              <ul>
                <li>
                  <NavLink exact to="/">
                    Strona Główna
                  </NavLink>
                </li>
                <li>
                  <NavLink exact to="/Room-View">
                    Pokoje
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>

          <div className="route">
            <Route exact path="/" component={() => <HomeView />} />
            <Route exact path="/Room-View" component={() => <RoomsView />} />
          </div>
        </header>
      </div>
    );
  }
}

export default withRouter(App);
