import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

export class Developer extends Component{
  static propTypes = {
    id:PropTypes.number,
    name:PropTypes.string,
    image_background:PropTypes.string,
  }
  render(){
    let {id, name, image_background} = this.props
    return(
      <div className="card game">
        <img src={image_background} className="card-img-top" alt={name}/>
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <Link to={`/developer/show/${id}`} className='link'>
            <button type="button" className="btn btn-outline-success btn-block">
              See more
            </button>
          </Link>
        </div>
      </div>
    )
  }
}
