import React, { Component } from "react";
import "./UserSettingsView.css";
import { Button } from "semantic-ui-react";
import {  NavLink, withRouter } from "react-router-dom";

class UserSettingsView extends Component {
  state = {
    isEditUserMode: false,
    isEditRoomMode: false,
    isEditEmployeesMode: false
  };

  toogleChange = fieldname => event => {
    this.setState({ [fieldname]: !this.state[fieldname] });
  };

  render() {
    const user = this.props.user;
    if (!user) {
      return <p>Loading Page....</p>;
    }
    return <div className="UserSettingsView">
        <li>
          <Button inverted color="orange" onClick={this.toogleChange("isEditUserMode")} className="linksButton nav">
            <NavLink to={"/My-Profile:" + user.uid + "/Edycja-profilu"}>
              Edycja Profilu
            </NavLink>
          </Button>
        </li>
        <li>
          <Button inverted color="orange" onClick={this.toogleChange("isEditRoomMode")} className="linksButton nav">
            <NavLink to={"/My-Profile:" + user.uid + "/Edycja-pokojów"}>
              Edycja Pokojów
            </NavLink>
          </Button>
        </li>
        {user.isAdmin && <li>
            <Button inverted color="orange" onClick={this.toogleChange("isEditEmployeesMode")} className="linksButton nav">
              <NavLink
                to={"/My-Profile:" + user.uid + "/Edycja-Pracowników"}
              >
                Edycja Pracowników
              </NavLink>
            </Button>
          </li>}
      </div>;
  }
}

export default withRouter(UserSettingsView);
