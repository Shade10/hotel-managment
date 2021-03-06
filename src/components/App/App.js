import React, { Component } from "react";
import { Button, Modal, Header } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import "./App.css";
import { Route, NavLink, withRouter } from "react-router-dom";
import { getRooms } from "../../services/rooms";
// import { getUsers, getUser } from "../../services/users";
import HomeView from "../HomeView/HomeView";
import RoomsView from "../RoomsView/RoomsView";
import firebase from "firebase";
import SignUpFormView from "../SignUpFormView/SignUpFormView";
import SignInFormView from "../../SignInFormView/SignInFormView";
import UserProfileView from "../UserProfileView/UserProfileView";
import RoomViewMode from "../RoomViewMode/RoomViewMode";
import UserSettingsView from "../UserSettingsView/UserSettingsView";
import EmployeesViewMode from "../EmployeesViewMode/EmployeesViewMode";
import UserUpdateInfo from "../../UserUpdateInfo/UserUpdateInfo";

class App extends Component {
  state = {
    rooms: null,
    // users: null,
    user: null,
    signInOpen: false,
    signUpOpen: false,
    isEditMode: false
  };

  toogleChange = fieldname => event => {
    this.setState({ [fieldname]: !this.state[fieldname] });
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
    // getUsers().then(users => this.setState({ users }));

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
    const {
      user,
      signInForm,
      signInOpen,
      signUpForm,
      signUpOpen,
      rooms
    } = this.state;
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
                  <NavLink className="links" to="/Rooms-View">
                    Pokoje
                  </NavLink>
                </Button>
              </li>
              {user ? (
                <li>
                  <Button inverted color="red" className="linksButton nav">
                    <NavLink className="links" to="/My-Profile">
                      Mój profil
                    </NavLink>
                  </Button>
                </li>
              ) : null}
              <li>
                <Button
                  inverted
                  color="red"
                  onClick={this.toogleChange("isEditMode")}
                  className="linksButton nav"
                >
                  Ustawienia
                </Button>
                  {this.state.isEditMode === true && (
                    <UserSettingsView user={user} rooms={rooms}/>
                  )}
              </li>
            </ul>
          </div>

          <div className="route">
          {console.log(this.props)
          }
            <Route exact path="/" component={() => <HomeView />} />

            <Route
              path="/Rooms-View"
              component={() => <RoomsView rooms={rooms} />}
            />

            {user ? (
              <Route
                exact
                path="/My-Profile"
                component={() => <UserProfileView user={user} />}
              />
            ) : null}
            {user && (
              <Route
                path={"/Edycja-profilu"}
                component={() => <UserUpdateInfo user={user} />}
              />
            )}

            {user && (
              <Route
                path={"/Edycja-pokojów"}
                component={() => <RoomViewMode user={user} rooms={rooms} />}
              />
            )}

            {user && (
              <Route
                path={"/Edycja-pracowników"}
                component={() => <EmployeesViewMode user={user} />}
              />
            )}
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
