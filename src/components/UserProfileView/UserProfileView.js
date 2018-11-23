import React, { Component } from "react";
import "./UserProfileView.css";
import { Button } from "semantic-ui-react";
import UserSettingsView from "../UserSettingsView/UserSettingsView";

class UserProfileView extends Component {
  state = {
    isEditMode: false
  };

  toogleChange = fieldname => event => {
    this.setState({ [fieldname]: !this.state[fieldname] });
  };

  render() {
    const user = this.props.user;
    if (!user) {
      return <p>Loading Page...</p>;
    }
    return (
      <div className="UserProfileView">
        <div className="settings">
          <div className="userUpdateInfo">
            <Button
              inverted
              color="orange"
              onClick={this.toogleChange("isEditMode")}
            >
              Ustawienia
            </Button>
          </div>
        </div>

        <div className="setting-contents">
          {this.state.isEditMode === true && (
            <UserSettingsView user={user} />
          )}
        </div>
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
