import React,{Component} from 'react'

export class Profile extends Component{

  _renderPage = () => {
    let logged = JSON.parse(localStorage.getItem('logged'))
    console.log(logged);
    return logged ? <h1>You are in</h1> : window.location.replace('/home')
  }

  render(){
    return(
      <div>
        {this._renderPage()}
      </div>
    )
  }
}
