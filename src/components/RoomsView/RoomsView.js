import React, { Component } from "react";
import "./RoomsView.css";
import RoomsList from "../RoomsList";
import snapshotToArray from '../../snapshotToArray'

class RoomsView extends Component {
  state = {
    rooms: [],
  };

  static getDerivedStateFromProps(props) {
    return {
      rooms: snapshotToArray(props.rooms),
    };
  }
  render() {
    if (!this.props.rooms) {
      return <p>Loading page...</p>;
    }
    return (
      <div className="RoomsView">
        <ul>
          <RoomsList rooms={this.state.rooms} />
        </ul>
      </div>
    );
  }
}
export default RoomsView;