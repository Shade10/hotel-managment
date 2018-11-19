import React, { Component } from "react";
import "./RoomListItem.css";

class RoomListItem extends Component {
  render() {
    return (
      <div className="roomListItem">
        <div className="roomMain">
          <span>
            Numer pokoju: {this.props.number} - Ilośc łóżek: {this.props.beds} -{" "}
            {this.props.description}
          </span>
        </div>
      </div>
    );
  }
}

export default RoomListItem;
