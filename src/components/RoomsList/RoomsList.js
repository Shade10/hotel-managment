import React, { Component } from "react";

import "./RoomsList.css";
import RoomListItem from "../RoomListItem/RoomListItem";

class RoomsList extends Component {

  render() {
    return (
      <>
        {this.props.rooms.map(room => (
          <RoomListItem />
        ))}
      </>
    );
  }
}

export default RoomsList;
