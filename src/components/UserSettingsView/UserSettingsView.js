import React, { Component } from "react";
import "./UserSettingsView.css";
import { Button } from "semantic-ui-react";
import { NavLink, withRouter } from "react-router-dom";

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
    return (
      <div className="UserSettingsView">
        <Button
          inverted
          color="orange"
          onClick={this.toogleChange("isEditUserMode")}
          className="linksButton nav"
        >
          <NavLink to={"/Edycja-profilu"}>
            Edycja Profilu
          </NavLink>
        </Button>
        <Button
          inverted
          color="orange"
          onClick={this.toogleChange("isEditRoomMode")}
          className="linksButton nav"
        >
          <NavLink to={"/Edycja-pokojów"}>
            Edycja Pokojów
          </NavLink>
        </Button>
        {user.isAdmin && (
          <Button
            inverted
            color="orange"
            onClick={this.toogleChange("isEditEmployeesMode")}
            className="linksButton nav"
          >
            <NavLink to={"/Edycja-Pracowników"}>
              Edycja Pracowników
            </NavLink>
          </Button>
        )}
      </div>
    );
  }
}

export default withRouter(UserSettingsView);
