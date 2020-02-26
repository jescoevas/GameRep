import React, {Component} from 'react'
import {Loading} from '../components/Loading'
import {Developer} from '../components/Developer'

const initialGame = {
  name:'',
  description:'',
  released:null,
  background_image:'',
  rating:null,
  metacritic_url:'',
  platforms:[],
  developers:[],
  publishers:[],
  genres:[]
}

export class GameShow extends Component{
  constructor(){
    super()
    this.state = {
      game:initialGame
    }
  }

  componentDidMount(){
    let {id} = this.props.match.params
    fetch(`https://api.rawg.io/api/games/${id}`).then(data => data.json())
      .then(game => {
        console.log('Game',game);
        this.setState({game})
      })
  }

  render(){
    let {name, description, released, background_image,
      rating, metacritic_url, platforms, developers, publishers, genres} = this.state.game

    if(name === ''){
      return <Loading/>
    }

    return (
      <div>
        <div className='row fadeIn fast mt-5'>
          <div className='col-4'>
            <img src={background_image} className="img-fluid rounded-circle" alt={name}/>
            <span className='badge badge-pill badge-success'>Released: {released}</span>
            <br/>
            <span className='badge badge-pill badge-success'>Rating: {rating}</span>
            <br/>
            <span className='badge badge-pill badge-success'>Metacritic URL: {
              metacritic_url==='' ? 'Not found' : <a href={metacritic_url}>{metacritic_url}</a>
            }</span>
          </div>
          <div className='col-8'>
            <h1>{name}</h1>
            <p><span className='badge badge-pill badge-success'>{publishers[0].name}</span></p>
            <hr/>
            <small>{description}</small>
          </div>
        </div>
        <hr/>
        <h2>Developers</h2>
        <div className="card-columns mt-4 animated fadeIn fast">
          {developers.map(developer => {
            return <Developer
                    key={developer.id}
                    name={developer.name}
                    image_background={developer.image_background}/>
          })}
        </div>
      </div>
    )
  }
}
