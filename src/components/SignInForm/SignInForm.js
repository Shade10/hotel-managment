import React, { Component } from "react";
import "./SignInForm.css";
import { withRouter } from "react-router-dom";
import firebase from "firebase";

class SignInForm extends Component {
  state = {
    email: "",
    password: null,
    error: null,
    user: null
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    firebase
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(() => {
        this.props.history.push("/");
        if (this.props.afterSignInSucces) {
          this.props.afterSignInSucces();
        }
      })
      .catch(error => this.setState({ error }));
  };

  render() {
    return (
      <div className="SignInForm">
        <form onSubmit={this.handleSubmit}>
          {this.state.error && <p>{this.state.error.message}</p>}
          <input
            placeholder="enter e-mail"
            name="e-mail"
            value={this.state.email}
            onChange={this.handleChange}
          />
          <input
            placeholder="enter password"
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
          />

          <button>zaloguj się</button>
        </form>
      </div>
    );
  }
}

export default withRouter(SignInForm);
