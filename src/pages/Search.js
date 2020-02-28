import React, {Component} from 'react'
import {GameList} from '../components/GameList'

export class Search extends Component{
  constructor(){
    super()
    this.state = {
      search:'',
      results: []
    }
  }

  _checkResults = (value) => {
    this.setState({search:value})
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
    if(this.state.search !== ''){
      return <GameList games={this.state.results}/>
    }
  }
  render(){
    return (
      <div>
        <div className="row animated fadeIn fast">
            <div className="col-md-11">
                <input
                type="text"
                spellCheck="false"
                id="search"
                className="form-control m-5 gamesearch"
                placeholder="Search for a game"
                autoComplete='off'
                onChange={e => this._checkResults(e.target.value)}/>
            </div>
        </div>
        {this._renderResults()}
      </div>
    )
  }
}

//<GameSearch onResults={this._checkResults}/>
