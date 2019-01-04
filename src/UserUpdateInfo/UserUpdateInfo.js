import React, { Component } from "react";
import "./UserUpdateInfo.css";
import { Button, Form, Checkbox } from "semantic-ui-react";
import { updateUser } from "../services/users";
import firebase from "firebase";

class UserUpdateInfo extends Component {
  state = {
    name: "",
    surname: "",
    file: null,

    error: null
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleAvatarChange = event => {
    this.setState({
      file: event.target.files[0]
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const file = this.state.file;
    const storageRef = firebase.storage().ref("/avatar");

    const thisRef = storageRef.child(file.name);
    thisRef.put(file).then(() => {
      thisRef.getDownloadURL(url => {
        const userData = {
          name: this.state.name,
          surname: this.state.surname,
          avatar: url
        };
        console.log(this.state.file);
        updateUser(this.props.user, userData);
      });
    });
  };

  render() {
    return (
      <div className="UserUpdateInfo">
        <Form onSubmit={this.handleSubmit} className="userProfileUpdate">
          <Form.Field>
            <label className="label">Imię</label>
            <input placeholder="First Name" />
          </Form.Field>
          <Form.Field>
            <label className="label">Nazwisko</label>
            <input placeholder="Last Name" />
          </Form.Field>
          <Form.Field>
            <label className="label">Zdjęcie</label>
            <input
              type="file"
              accept="image/png image/png"
              className="inputFile"
            />
          </Form.Field>
          <Button type="submit">Submit</Button>
        </Form>
      </div>
    );
  }
}

export default UserUpdateInfo;
