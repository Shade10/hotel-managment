import React, { Component } from "react";

import "./RoomsView.css";

class RoomsView extends Component {
  state = {
    rooms: []
  };

  render() {
    const { rooms } = this.state;
    return (
      <div className="RoomsView">
        <ul key={rooms.id} />
      </div>
    );
  }
}

export default RoomsView;
