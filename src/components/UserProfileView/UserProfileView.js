import React, { Component } from "react";
import "./UserProfileView.css";

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
