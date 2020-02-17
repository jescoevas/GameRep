import React, {Component} from 'react'
import {GameList} from '../components/GameList'

export class Home extends Component{
  constructor(){
    super()
    this.state = {
      games:[]
    }
  }
  componentDidMount(){
    fetch(`https://api.rawg.io/api/games`).then(data => data.json())
      .then(data => {
        console.log(data.results);
        this.setState({games:data.results})
      })
  }

  render(){
    let {games} = this.state
    return (
      <div>
        <GameList games={games}/>
      </div>
    )
  }
}
