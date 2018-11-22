import React, { Component } from "react";
import "./UserProfileView.css";
import UserUpdateInfo from "../../UserUpdateInfo/UserUpdateInfo";
import { Button } from "semantic-ui-react";
import RoomViewMode from "../RoomViewMode/RoomViewMode";

class UserProfileView extends Component {
  state = {
    isEditProfileMode: false,
    isEditRoomMode: false,
  };

  toogleChange = () => {
    this.setState({ isEditProfileMode: !this.state.isEditProfileMode });
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
            <Button inverted color="orange" onClick={this.toogleChange}>
              Edytuj Profile
            </Button>
          </div>
          <div className="roomUpdate">
            <Button inverted color="orange" onClick={this.toogleChange}>
              Edycja Pokojów
            </Button>
          </div>
        </div>

        <div className="setting-contents">
          {this.state.isEditProfileMode === true && (
            <UserUpdateInfo user={user.uid} />
          )}
          {this.state.isEditMode === true && <RoomViewMode user={user.uid} />}
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
