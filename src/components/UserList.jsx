import React, { Component } from 'react'
import UserItem from './UserItem'
import users from "../users.json"


class CardList extends Component {
   
  render(props) {
    return (
      <div>
        {
            users.results.map(item => {
                return (
                    <UserItem first={item.name.first} last={item.name.last} username={item.login.username} key={item.login.username}/>
                )
            })
        }
      </div>
    )
  }
}

export default CardList