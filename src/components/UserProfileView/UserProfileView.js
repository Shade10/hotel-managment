import React, { Component } from 'react'
import './UserProfileView.css'
import snapshotToArray from '../../snapshotToArray'

class UserProfileView extends Component {
  render() {
    const user = this.props.user;
  if (!user) {
    return <p>Loading Page...</p>;
  }
    return (
      <div className="UserProfileView">
      {console.log("user profile", this.props.user)
      }
        UserProfileView
        <p>dsdsdsa</p>
      </div>
    );
  }
}
export default UserProfileView