import React, { Component } from "react";

import "./RoomsView.css";
import RoomsList from "../RoomsList";
import snapshotToArray from '../../snapshotToArray'

class RoomsView extends Component {
  state = {
    rooms: []
  };

  static getDerivedStateFromProps(props) {
    return {
      rooms: snapshotToArray(props.rooms)
    }
  }

  render() {
    if (!this.props.rooms) {
      return <p>Loading page...</p>;
    }
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
