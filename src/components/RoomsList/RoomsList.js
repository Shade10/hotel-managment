import React, { Component } from "react";
import PropTypes from 'prop-types'
import "./RoomsList.css";
import RoomListItem from "../RoomListItem/RoomListItem";

class RoomsList extends Component {
  static propsTypes = {
    rooms: PropTypes.array
  }
  render() {
    return (
      <>
        {this.props.rooms.map(room => (
          <RoomListItem
            key={room.id}
            id={room.id}
            number={room.number}
            beds={room.beds}
            description={room.description}
          />
        ))}
      </>
    );
  }
}

export default RoomsList;
