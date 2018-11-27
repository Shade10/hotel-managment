import React, { Component } from "react";
import "./RoomViewMode.css";
import snapshotToArray from "../../snapshotToArray";

class RoomViewMode extends Component {
  render() {
    const { rooms } = this.props.rooms;

    if (!rooms) {
      return <p>Loading Page...</p>;
    }
    return <div className="RoomViewMode">
        {console.log(this.props.rooms)}
        {console.log(this.state.rooms)}
        {console.log(this.props.user)}
        <span>
          Numer pokoju: {this.props.number} - Ilośc łóżek: {this.props.beds} - {this.props.description}
        </span>
      </div>;
  }
}

export default RoomViewMode;