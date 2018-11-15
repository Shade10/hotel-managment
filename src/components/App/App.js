import React, { Component } from "react";
import { Button, Modal, Header, Image } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import "./App.css";
import { Route, NavLink, withRouter } from "react-router-dom";
import HomeView from "../HomeView/HomeView";
import RoomsView from "../RoomsView/RoomsView";
import { getRooms } from "../../services/rooms";
import firebase from "firebase";
import SignUpForm from "../SignUpForm/SignUpForm";

class App extends Component {
  state = {
    rooms: null,
    users: null,
    user: null,
    signUpOpen: false,
    signInOpen: false
  };

  signInShow = signInForm => () =>
    this.setState({ signInForm, signInOpen: true });
  signInClose = () => this.setState({ signInForm: false });

  signUpShow = signUpForm => () =>
    this.setState({ signUpForm, signInOpen: true });
  signUpClose = () => this.setState({ signUpOpen: false });

  logOut = () => {
    firebase
      .auth()
      .signOut()
      .then(
        () => {
          this.setState({
            user: null
          });
        },
        function(error) {
          console.warn("error");
        }
      )
      .then(() => this.props.push("/"));
  };

  componentDidMount() {
    getRooms().then(rooms => this.setState({ rooms }));
  }

  render() {
    const { user } = this.state;
    return (
      <div className="App">
        <div className="nav">
          <div className={user ? "loggedIn signUp" : "signUp"}>
            <Button
              onClick={this.signInShow("blurring")}
              inverted
              color="blue"
              className="linksButton"
            >
              Rejestracja
            </Button>
          </div>
          <div className={user ? "loggedIn signIn" : "signIn"}>
            <Button
              onClick={this.signUpShow("blurring")}
              inverted
              color="blue"
              className="linksButton"
            >
              Logowanie
            </Button>
          </div>
          <div className="log">
            {user ? (
              <div>
                <Button
                  inverted
                  color="blue"
                  className="linksButton"
                  onClick={() => this.logOut()}
                >
                  Log out
                </Button>
              </div>
            ) : null}
          </div>
        </div>

        <header className="App-header">
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

          <div className="route">
            <Route exact path="/" component={() => <HomeView />} />
            <Route
              exact
              path="/Room-View"
              component={() => <RoomsView rooms={this.state.rooms} />}
            />
            <Route path="/sign-Up" component={() => <SignUpForm />} />
          </div>
        </header>
      </div>
    );
  }
}

export default withRouter(App);
