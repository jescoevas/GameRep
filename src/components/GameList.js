import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Game} from './Game'

export class GameList extends Component{
  static propTypes = {
    games:PropTypes.array
  }

  render(){
    let {games} = this.props
    return(
        <div className="card-columns m-5 animated fadeIn fast">
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
    )
  }
}
