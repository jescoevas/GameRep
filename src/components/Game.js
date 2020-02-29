import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import axios from 'axios'

const IsLogged = JSON.parse(localStorage.getItem('logged'))
const initialUser = {
  favouritegames:[],
  playedgames:[],
  gamestoplay:[]
}

export class Game extends Component{
  static propTypes = {
    id:PropTypes.number,
    name:PropTypes.string,
    background_image:PropTypes.string,
    rating:PropTypes.number,
    genres:PropTypes.array
  }

  constructor() {
    super()
    this.state = {
      user:initialUser
    }
  }

  componentDidMount(){
      fetch(`https://react-gamerep.firebaseio.com/users/${IsLogged}.json`).then(res => res.json())
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

  _addToFavourites = () => {
    const {id, name, background_image, rating, genres} = this.props
    axios.post(
      `https://react-gamerep.firebaseio.com/users/${IsLogged}/favouritegames.json`,
      {
        gid:id,name,background_image,rating,genres
      }
    ).then(res => window.location.replace('/profile'))
     .catch(err => console.log(err))
  }

  _addToPlayed = () => {
    const {id, name, background_image, rating, genres} = this.props
    axios.post(
      `https://react-gamerep.firebaseio.com/users/${IsLogged}/playedgames.json`,
      {
        gid:id,name,background_image,rating,genres
      }
    ).then(res => window.location.replace('/profile'))
     .catch(err => console.log(err))
  }

  _addToToPlay = () => {
    const {id, name, background_image, rating, genres} = this.props
    axios.post(
      `https://react-gamerep.firebaseio.com/users/${IsLogged}/gamestoplay.json`,
      {
        gid:id,name,background_image,rating,genres
      }
    ).then(res => window.location.replace('/profile'))
     .catch(err => console.log(err))
  }

  _renderFavourites = () => {
    if(IsLogged){
      const {id} = this.props
      const {favouritegames} = this.state.user
      console.log(favouritegames);
      if(favouritegames !== null && favouritegames !== undefined){
        let found = Object.keys(favouritegames).find(key => favouritegames[key].gid === id)
        if(!found){
          return <button type="button"
                          className='btn btn-outline-success btn-block mt-1'
                          onClick={this._addToFavourites}>
                  <i className='fa fa-plus mr-1'></i>
                     Add to favourites
                 </button>
        }
      }else{
        return <button type="button"
                        className='btn btn-outline-success btn-block mt-1'
                        onClick={this._addToFavourites}>
                  <i className='fa fa-plus mr-1'></i>
                   Add to favourites
               </button>
      }
    }
    return null
  }

  _renderPlayed = () => {
    if(IsLogged){
      const {id} = this.props
      const {playedgames} = this.state.user
      if(playedgames !== null && playedgames !== undefined){
        let found = Object.keys(playedgames).find(key => playedgames[key].gid === id)
        if(!found){
          return <button type="button"
                          className='btn btn-outline-success btn-block mt-1'
                          onClick={this._addToPlayed}>
                    <i className='fa fa-plus mr-1'></i>
                     Add to played
                 </button>
        }
      }else{
        return <button type="button"
                        className='btn btn-outline-success btn-block mt-1'
                        onClick={this._addToPlayed}>
                  <i className='fa fa-plus mr-1'></i>
                   Add to played
               </button>
      }
    }
    return null
  }

  _renderToPlay = () => {
    if(IsLogged){
      const {id} = this.props
      const {gamestoplay} = this.state.user
      if(gamestoplay !== null && gamestoplay !== undefined){
        let found = Object.keys(gamestoplay).find(key => gamestoplay[key].gid === id)
        if(!found){
          return <button type="button"
                          className='btn btn-outline-success btn-block mt-1'
                          onClick={this._addToToPlay}>
                    <i className='fa fa-plus mr-1'></i>
                     Add to play
                 </button>
        }
      }else{
        return <button type="button"
                              className='btn btn-outline-success btn-block mt-1'
                              onClick={this._addToToPlay}>
                  <i className='fa fa-plus mr-1'></i>
                   Add to play
               </button>
      }
    }
    return null
  }

  render(){

    let {id, name, background_image, rating, genres} = this.props
    return (
      <div className="card game">
        <img src={background_image} className="card-img-top" alt={name}/>
        <div className="card-body">
          <h5 className="card-title">
            {name}

          </h5>
          <p className="card-text">
            {genres.map(genre => {
              return <span key={genre.id} className="badge badge-pill badge-success">
                      {genre.name}
                    </span>
            })}
            <br/>
            <span className="badge badge-pill badge-success">Rating: {rating}</span>
          </p>
          <Link to={`/game/show/${id}`} className='link'>
            <button type="button" className="btn btn-outline-success btn-block">
              See more
            </button>
          </Link>
          {this._renderFavourites()}
          {this._renderPlayed()}
          {this._renderToPlay()}
        </div>
      </div>
    )
  }
}
