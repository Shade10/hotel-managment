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
            <span>
              Numer pokoju: {this.props.number} - Ilośc łóżek: {this.props.beds} - {this.props.description}
            </span>
          </span>
        </li>
      </div>;
  }
}

export default RoomListItem