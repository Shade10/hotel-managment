import React, { Component } from "react";
import "./SignUpForm.css";
import firebase from "firebase";
import { rootRef } from "../../setupFirebase";
import { withRouter } from "react-router-dom";

class SignUpForm extends Component {
  state = {
    email: null,
    password: null,
    name: null,
    surname: null,
    error: null
  };

  handleChenge = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    firebase
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password )
      .then(data => {
        rootRef
          .child("/users/" + data.user.uid)
          .set({ name: this.state.name, surname: this.state.surname });
        this.setState({ error: null });
      })
      .then(() => {
        this.props.history.push("/");
        if (this.props.afterSignUpSucces) {
          this.props.afterSignUpSucces();
        }
      })
      .catch(error => this.setState({ error }));

  };

  render() {
    return (
      <div className="SignUpForm">
        <form onSubmit={this.handleSubmit}>
          {this.state.error && <p>{this.state.error.message}</p>}

          <input
            placeholder="Enter name"
            name="name"
            value={this.state.name}
            onChange={this.handleChenge}
          />
          <input
            placeholder="Enter surname"
            name="surname"
            value={this.state.surname}
            onChange={this.handleChenge}
          />

          <input
            placeholder="Enter e-mail"
            name="e-mail"
            value={this.state.email}
            onChange={this.handleChenge}
          />

          <input
            placeholder="Enter password"
            name="password"
            value={this.state.password}
            onChange={this.handleChenge}
          />
          <button>zarejestruj się</button>
        </form>
      </div>
    );
  }
}

export default withRouter(SignUpForm);
