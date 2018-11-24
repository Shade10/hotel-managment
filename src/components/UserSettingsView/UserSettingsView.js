import React, { Component } from "react";
import "./UserSettingsView.css";
import { Button } from "semantic-ui-react";
import { Route, NavLink, withRouter } from "react-router-dom";
import RoomViewMode from "../RoomViewMode/RoomViewMode";

class UserSettingsView extends Component {
  state = {
    isEditRoomMode: false,
    isEditEmployeesMode: false
  };

  toogleChange = fieldname => event => {
    this.setState({ [fieldname]: !this.state[fieldname] });
  };

  render() {
    const user = this.props.user;
    return (
      <div className="UserSettingsView">
        <div className="roomMode">
          <Button
            inverted
            color="orange"
            onClick={this.toogleChange("isEditRoomMode")}
          >
            <NavLink to={"/My-Profile:" + user.uid + "/Edycja-pokojów"}>
              Edycja Pokojów
            </NavLink>
          </Button>
        </div>
        {user.isAdmin && (
          <div className="employeesMode">
            <Button
              inverted
              color="orange"
              onClick={this.toogleChange("isEditEmployeesMode")}
            >
              <NavLink to={"/My-Profile:" + user.uid + "/Edycja-Pracowników"}>
                Edycja Pracowników
              </NavLink>
            </Button>
          </div>
        )}


      </div>
    );
  }
}

export default withRouter(UserSettingsView);
