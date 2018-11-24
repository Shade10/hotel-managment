import React, { Component } from "react";
import "./UserProfileView.css";
import { Button } from "semantic-ui-react";
import UserSettingsView from "../UserSettingsView/UserSettingsView";

class UserProfileView extends Component {
  

  render() {
    const user = this.props.user;
    if (!user) {
      return <p>Loading Page...</p>;
    }
    return (
      <div className="UserProfileView">
        

        <div className="userInfo">
          <p>
            {user.name} {user.surname}
          </p>
        </div>
      </div>
    );
  }
}
export default UserProfileView;
