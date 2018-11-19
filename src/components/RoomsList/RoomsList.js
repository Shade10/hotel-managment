import React, { Component } from "react";
import "./RoomsList.css";
import RoomListItem from "../RoomListItem/RoomListItem";

class RoomsList extends Component {
  render() {
    return (
      <>
        {this.props.rooms.map(room => (
          <li key={room.id}>
            <RoomListItem
              id={room.id}
              key={room.id}
              number={room.number}
              beds={room.beds}
              description={room.description}
            />
          </li>
        ))}
      </>
    );
  }
}
export default RoomsList;
