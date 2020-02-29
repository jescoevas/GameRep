import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Game} from './Game'

export class GameList extends Component{
  static propTypes = {
    games:PropTypes.array
  }

  toArray = (data) => {
    if(data === null || data===undefined) return []
    let res = []
    Object.keys(data).forEach(i => {
      let user = data[i]
      user.id = i
      res.push(user)
    });
    return res
  }

  render(){
    let {games} = this.props

    return(
        <div className="card-columns m-5 animated fadeIn fast">
          {games.map(game => {
            return (
              <Game
              key={Number(game.id)}
              id={Number(game.id)}
              name={game.name}
              background_image={game.background_image}
              rating={game.rating}
              genres={this.toArray(game.genres)}/>
            )
          })}
        </div>
    )
  }
}
