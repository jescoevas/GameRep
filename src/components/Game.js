import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

export class Game extends Component{
  static propTypes = {
    id:PropTypes.number,
    name:PropTypes.string,
    background_image:PropTypes.string,
    rating:PropTypes.number,
    genres:PropTypes.array
  }
  render(){
    let {id, name, background_image, rating, genres} = this.props
    return (
      <div className="card game">
        <img src={background_image} className="card-img-top" alt={name}/>
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">
            {genres.map(genre => {
              return <span key={genre.id} className="badge badge-pill badge-success">
                      {genre.name}
                    </span>
            })}
            <br/>
            <span className="badge badge-pill badge-success">Rating: {rating}</span>
          </p>
          <Link to={`/show/${id}`}>
            <button type="button" className="btn btn-outline-success btn-block">
              Ver detalles
            </button>
          </Link>
        </div>
      </div>
    )
  }
}
