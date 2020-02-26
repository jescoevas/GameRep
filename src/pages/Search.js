import React, {Component} from 'react'
import {GameSearch} from '../components/GameSearch'
import {GameList} from '../components/GameList'

export class Search extends Component{
  constructor(){
    super()
    this.state = {
      results: []
    }
  }

  _checkResults = (value) => {
    if(value !== ''){
      fetch(`https://api.rawg.io/api/games?search=${value}`).then(data => data.json())
        .then(data => {
          this.setState({results:data.results})
        })
    }else{
      this.setState({results:[]})
    }
  }

  _renderResults = () => {
    let {results} = this.state
    if(results.length !== 0){
      return <GameList games={results}/>
    }
  }
  render(){
    return (
      <div>
        <GameSearch onResults={this._checkResults}/>
        {this._renderResults()}
      </div>
    )
  }
}
