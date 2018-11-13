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
        {console.log(this.props.rooms)}
        <ul key={rooms.id}>
          <RoomsList rooms={this.props.rooms} />
        </ul>
      </div>
    );
  }
}

export default RoomsView;
