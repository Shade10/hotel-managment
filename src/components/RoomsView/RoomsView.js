import React, { Component } from "react";

import "./RoomsView.css";
import RoomsList from "../RoomsList";

class RoomsView extends Component {
  state = {
    rooms: []
  };

  render() {
    const { rooms } = this.state;
    return (
      <div className="RoomsView">
        <ul key={rooms.id}>
          <RoomsList />
        </ul>
      </div>
    );
  }
}

export default RoomsView;
