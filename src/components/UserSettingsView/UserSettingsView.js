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
    if (!user) {
      return <p>Loading Page....</p>
    }
    return (
      <div className="UserSettingsView">
        <div className="roomMode">
          <li>
            <Button
              inverted
              color="orange"
              onClick={this.toogleChange("isEditRoomMode")}
            >
              <NavLink to={"/My-Profile:" + user.uid + "/Edycja-pokojów"}>
                Edycja Pokojów
              </NavLink>
            </Button>
          </li>
        </div>
        {user.isAdmin && (
          <div className="employeesMode">
            <li>
              <Button
                inverted
                color="orange"
                onClick={this.toogleChange("isEditEmployeesMode")}
              >
                <NavLink to={"/My-Profile:" + user.uid + "/Edycja-Pracowników"}>
                  Edycja Pracowników
                </NavLink>
              </Button>
            </li>
          </div>
        )}
      </div>
    );
  }
}

export default withRouter(UserSettingsView);
