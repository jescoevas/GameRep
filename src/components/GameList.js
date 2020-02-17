import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Game} from './Game'

export class GameList extends Component{
  static propTypes = {
    games:PropTypes.array
  }
  //?search=harry potter chamber of secrets


  render(){
    let {games} = this.props
    return(
      <div>
        <div className="game-list">
          {games.map(game => {
            return (
              <Game
              key={game.id}
              id={game.id}
              name={game.name}
              background_image={game.background_image}
              rating={game.rating}
              genres={game.genres}/>
            )
          })}
        </div>
      </div>
    )
  }
}
