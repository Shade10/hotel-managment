import React, { Component } from "react";
import "./UserProfileView.css";
import UserUpdateInfo from "../../UserUpdateInfo/UserUpdateInfo";
import { Button } from "semantic-ui-react";
import RoomViewMode from "../RoomViewMode/RoomViewMode";
import EmployeesViewMode from "../EmployeesViewMode/EmployeesViewMode";

class UserProfileView extends Component {
  state = {
    isEditProfileMode: false,
    isEditRoomMode: false,
    isEditEmployeesMode: false
  };

  toogleChange = fieldname => event => {
    this.setState({ [fieldname]: !event.target.value });
  };

  render() {
    const user = this.props.user;
    if (!user) {
      return <p>Loading Page...</p>;
    }
    return (
      <div className="UserProfileView">
        <div className="settings">
        {console.log(this.state)
        }
          <div className="userUpdateInfo">
            <Button
              inverted
              color="orange"
              onClick={this.toogleChange("isEditProfileMode")}
            >
              Edytuj Profile
            </Button>
          </div>
          <div className="roomUpdate">
            <Button
              inverted
              color="orange"
              onClick={this.toogleChange("isEditRoomMode")}
            >
              Edycja Pokojów
            </Button>
          </div>
        </div>

        <div className="setting-contents">
          {this.state.isEditProfileMode === true && (
            <UserUpdateInfo user={user.uid} />
          )}
          {this.state.isEditRoomMode === true && (
            <RoomViewMode user={user.uid} />
          )}
          {this.state.isEditEmployeesMode === true && (
            <EmployeesViewMode user={user.uid} />
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
