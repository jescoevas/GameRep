import React, {Component} from 'react'
import {Loading} from '../components/Loading'

const initialDeveloper = {

}

export class DeveloperShow extends Component{
  constructor(){
    super()
    this.state = {
      developer:initialDeveloper
    }
  }

  componentDidMount(){
    let {id} = this.props.match.params
    fetch(`https://api.rawg.io/api/developers/${id}`).then(data => data.json())
      .then(developer => {
        console.log('Developer',developer);
        this.setState({developer})
      })
  }

  render(){
    /*let {name, description, released, background_image,
      rating, metacritic_url, platforms, developers, publishers, genres} = this.state.developer

    if(name === ''){
      return <Loading/>
    }*/

    return (
      <div>


      </div>
    )
  }

  /*<div className='row fadeIn fast mt-5'>
    <div className='col-4'>
      <img src={background_image} className="img-fluid rounded-circle" alt={name}/>
      <span className='badge badge-pill badge-success'>Released: {released}</span>
      <br/>
      <span className='badge badge-pill badge-success'>Rating: {rating}</span>
      <br/>
      <span className='badge badge-pill badge-success'>Metacritic URL: {
        metacritic_url==='' ? 'Not found' : metacritic_url
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
  <h2>Developers</h2>*/
}
