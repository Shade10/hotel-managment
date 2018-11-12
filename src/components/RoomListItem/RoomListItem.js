import React, { Component } from 'react'

import './RoomListItem.css'

class RoomListItem extends Component {


  state ={
    data: {
      name: 'Jan',
      surname: 'kowalski',
      old: 23
    }
  }

  render() {
    return <div className="RoomListItem">
        <li>
          <span>
          {this.state.data.name} {this.state.data.surname} {this.state.data.old}
          </span>
        </li>
      </div>;
  }
}

export default RoomListItem