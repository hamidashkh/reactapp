import React, { Component } from 'react'

class CardItem extends Component {
  render(props) {
    return (
      <div>
        <ul>
            <li>First:{this.props.first}</li>
            <li>last:{this.props.last}</li>
            <li>username:{this.props.username}</li>
        </ul>
      </div>
    )
  }
}

export default CardItem