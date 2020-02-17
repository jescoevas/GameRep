import React, {Component} from 'react'

export class GameList extends Component{
  constructor(){
    super()
    this.state = {
      list:[]
    }
  }

  componentDidMount(){
    fetch(`https://api.rawg.io/api/games?search=harry potter chamber of secrets`).then(data => data.json())
      .then(data => {
        console.log(data.results);
        this.setState({list:data})
      })
  }

  render(){
    return(
      <div>
        <h1>Lista de juegos</h1>
        <button type="button" className="btn btn-primary">Hola</button>
      </div>
    )
  }
}
