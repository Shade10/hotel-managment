import React, { Component } from "react";

import "./RoomsList.css";
import RoomListItem from "../RoomListItem/RoomListItem";

class RoomsList extends Component {
  render() {
    return (
      <>
        {this.props.rooms.map(room => (
          <RoomListItem
            key={room.id}
            id={room.id}
            number={room.number}
            beds={room.beds}
            isFree={room.isFree}
            description={room.description}
          />
        ))}
      </>
    );
  }
}

export default RoomsList;
