import React, { Component } from "react";
import "./UserSettingsView.css";
import {Button} from 'semantic-ui-react'

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
            Edycja Pokojów
          </Button>
        </div>
        {console.log(user)
        }
        {user.isAdmin && (
          <div className="employeesMode">
            <Button
              inverted
              color="orange"
              onClick={this.toogleChange("isEditEmployeesMode")}
            >
              Edycja Pracowników
            </Button>
          </div>
        )}
      </div>
    );
  }
}

export default UserSettingsView;