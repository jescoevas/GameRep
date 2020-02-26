import React, {Component} from 'react'

export class GameShow extends Component{
  constructor(){
    super()
    this.state = {
      game:{}
    }
  }
  componentDidMount(){
    let {id} = this.props.match.params
    fetch(`https://api.rawg.io/api/games/${id}`).then(data => data.json())
      .then(data => {
        console.log(data);
        this.setState({game:data})
      })
  }

  render(){
    let {name, description, released, background_image,
      rating, metacritic_url, platforms, developers, publishers, genres} = this.state
    return (
      <div>
        <h1>Show</h1>
      </div>
    )
  }
}
