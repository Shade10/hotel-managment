import React, { Component } from "react";
import "./UserProfileView.css";
import UserUpdateInfo from "../../UserUpdateInfo/UserUpdateInfo";
import { Button } from "semantic-ui-react";

class UserProfileView extends Component {
  state = {
    isEditMode: false
  };

  toogleChange = event => {
    this.setState({ isEditMode: !this.state.isEditMode });
  };

  render() {
    const user = this.props.user;
    if (!user) {
      return <p>Loading Page...</p>;
    }
    return (
      <div className="UserProfileView">
        <div className="userUpdateInfo">
          {this.state.isEditMode === true && <UserUpdateInfo user={user.uid} />}
          <Button inverted color="orange" onClick={this.toogleChange}>
            Edytuj Profile
          </Button>
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
