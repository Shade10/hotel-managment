import React, { Component } from "react";
import { Button, Modal, Header, Image } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import "./App.css";
import { Route, NavLink, withRouter } from "react-router-dom";
import HomeView from "../HomeView/HomeView";
import RoomsView from "../RoomsView/RoomsView";
import { getRooms } from "../../services/rooms";
import firebase from "firebase";
import SignUpFormView from "../SignUpFormView/SignUpFormView";
import SignInFormView from "../../SignInFormView/SignInFormView";
import { getUsers } from "../../services/users";

class App extends Component {
  state = {
    rooms: null,
    users: null,
    user: null,
    signInOpen: false,
    signUpOpen: false
  };

  signInShow = signInForm => () =>
    this.setState({ signInForm, signInOpen: true });
  signInClose = () => this.setState({ signInOpen: false });

  signUpShow = signUpForm => () =>
    this.setState({ signUpForm, signUpOpen: true });
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
      .then(() => this.props.history.push("/"));
  };

  componentDidMount() {
    getRooms().then(rooms => this.setState({ rooms }));
    getUsers().then(users => this.setState({ users }));

    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        firebase
          .database()
          .ref("/users/" + user.uid)
          .once("value")
          .then(snapshot => {
            let fetchedUser = { uid: user.uid, ...(snapshot.val() || {}) };
            this.setState({ user: fetchedUser });
          });
      }
    });
  }

  render() {
    const { user, signInForm, signInOpen, signUpForm, signUpOpen } = this.state;
    return (
      <div className="App">
        <div className="nav">
          <div className={user ? "loggedIn signUp" : "signUp"}>
            <Button
              onClick={this.signUpShow("blurring")}
              inverted
              color="blue"
              className="linksButton log"
            >
              Rejestracja
            </Button>
          </div>
          <div className={user ? "loggedIn signIn" : "signIn"}>
            <Button
              onClick={this.signInShow("blurring")}
              inverted
              color="blue"
              className="linksButton log"
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
                <Button inverted color="red" className="linksButton nav">
                  <NavLink className="links" exact to="/">
                    Strona Główna
                  </NavLink>
                </Button>
              </li>
              <li>
                <Button inverted color="red" className="linksButton nav">
                  <NavLink className="links" exact to="/Room-View">
                    Pokoje
                  </NavLink>
                </Button>
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
          </div>
        </header>

        <Modal form={signUpForm} open={signUpOpen} onClose={this.signUpClose}>
          <Modal.Header>Rejestracja</Modal.Header>
          <Modal.Content image>
            <Modal.Description>
              <Header>Rejestracja</Header>
              <SignUpFormView afterSignUpSuccess={this.signUpClose} />
            </Modal.Description>
          </Modal.Content>
          <Modal.Actions>
            <Button color="black" onClick={this.signUpClose}>
              Close
            </Button>
          </Modal.Actions>
        </Modal>

        <Modal form={signInForm} open={signInOpen} onClose={this.signInClose}>
          <Modal.Header>Logowanie</Modal.Header>
          <Modal.Content image>
            <Modal.Description>
              <Header>Logowanie</Header>
              <SignInFormView afterSignInSuccess={this.signInClose} />
            </Modal.Description>
          </Modal.Content>
          <Modal.Actions>
            <Button color="black" onClick={this.signInClose}>
              Close
            </Button>
          </Modal.Actions>
        </Modal>
      </div>
    );
  }
}

export default withRouter(App);
