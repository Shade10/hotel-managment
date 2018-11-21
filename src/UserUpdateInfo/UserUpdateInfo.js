import React, { Component } from "react";
import "./UserUpdateInfo.css";
import { Button } from "semantic-ui-react";

class UserUpdateInfo extends Component {
  state = {
    name: "",
    surname: "",

    error: null
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <div className="UserUpdateInfo">
        <form onSubmit={this.handleSubmit}>
          {this.state.error && <p>{this.state.error.message}</p>}
          <input
            placeholder="Imię"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <input
            placeholder="Nazwisko"
            name="surname"
            value={this.state.surname}
            onChange={this.handleChange}
          />
          <Button inverted color="orange" onClick={this.handleSubmit}>
            Zaakceptuj zmiany
          </Button>
        </form>
      </div>
    );
  }
}

export default UserUpdateInfo;
