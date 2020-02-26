import React, {Component} from 'react'
import {GameList} from '../components/GameList'
import {Loading} from '../components/Loading'

export class Home extends Component{
  constructor(){
    super()
    this.state = {
      games:[]
    }
  }
  //?search=harry potter chamber of secrets
  componentDidMount(){
    fetch(`https://api.rawg.io/api/games`).then(data => data.json())
      .then(data => {
        console.log(data.results);
        this.setState({games:data.results})
      })
  }

  _renderResults = () => {
    let {games} = this.state
    return games.length !==0 ? <GameList games={games}/> : <Loading/>
  }

  render(){
    return (
      <div>
        {this._renderResults()}
      </div>
    )
  }
}
