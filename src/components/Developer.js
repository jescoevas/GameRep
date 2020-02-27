import React, {Component} from 'react'
import PropTypes from 'prop-types'

export class Developer extends Component{
  static propTypes = {
    name:PropTypes.string,
    image_background:PropTypes.string,
  }
  render(){
    let {name, image_background} = this.props
    return(
      <div className="card game">
        <img src={image_background} className="card-img-top" alt={name}/>
        <div className="card-body">
          <h5 className="card-title text-center">{name}</h5>
        </div>
      </div>
    )
  }
}
