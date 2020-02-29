import React,{Component} from 'react'
import {GameList} from '../components/GameList'

const initialUser = {
  favouritegames:[],
  playedgames:[],
  gamestoplay:[]
}

const userId = JSON.parse(localStorage.getItem('logged'))
const testId= 'lDJ31Cnl4yYF56KzJQV7xLPPWOZ2'

export class Profile extends Component{

  constructor(){
    super()
    this.state = {
      user:initialUser
    }
  }

  componentDidMount(){
      fetch(`https://react-gamerep.firebaseio.com/users/${userId}.json`).then(res => res.json())
      .then(user => {
        if(user !== null){
          this.setState({user})
        }
      })
  }

  toArray = (data) => {
    if(data === null || data === undefined) return []
    let res = []
    Object.keys(data).forEach(i => {
      let element = data[i]
      element.id = i
      res.push(element)
    });
    return res
  }

  _renderGames = (games) => {
    games = this.toArray(games)
    return games.length ===0 ?
    <small className='mt-5 ml-5'>There are no games to show</small>:
    <GameList games={games}/>
  }

  render(){

    let logged = JSON.parse(localStorage.getItem('logged'))
    if(!logged){
      return window.location.replace('/home')
    }

    let {favouritegames, playedgames,gamestoplay} = this.state.user

    return(
      <div className='mb-5 animated fadeIn fast'>
        <h2 className='mt-4 ml-5 mr-5'><u>Favourite games</u></h2>
        {this._renderGames(favouritegames)}
        <hr className='ml-5 mr-5'/>
        <h2 className='ml-5 mr-5'><u>Played games</u></h2>
        {this._renderGames(playedgames)}
        <hr className='ml-5 mr-5'/>
        <h2 className='ml-5 mr-5'><u>Games you want to play</u></h2>
        {this._renderGames(gamestoplay)}
      </div>
    )
  }
}
