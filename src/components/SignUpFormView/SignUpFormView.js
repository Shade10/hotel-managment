import React, { Component } from "react";
import "./SignUpFormView.css";
import SignUpForm from '../SignUpForm/SignUpForm'

class SignUpFormView extends Component {
  render() {
    return (
      <div className="SignUpFormView">
        <SignUpForm {...this.props} />
      </div>
    );
  }
}

export default SignUpFormView;
