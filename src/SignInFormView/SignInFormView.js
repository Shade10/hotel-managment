import React, { Component } from 'react'
import './SignInFormView.css'
import SignInForm from '../components/SignInForm/SignInForm'

class SignInFormView extends Component {

  render() {
    return  (
      <div className="SignInFormView">
        <SignInForm {...this.props} />
      </div>
    )
  }
}

export default SignInFormView