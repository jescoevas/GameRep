import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'
import firebase from 'firebase'

const provider = new firebase.auth.GoogleAuthProvider();

export class Navbar extends Component{
  constructor(){
    super()
    this.state = {
      logged:false
    }
  }

  _login = () => {
    firebase.auth().signInWithPopup(provider).then(data => {
      this.setState({logged:true})
      localStorage.setItem('logged',JSON.stringify(data.user.uid))
      console.log(data);
      window.location.replace('/profile')
    })

  }

  _logout = () => {
    firebase.auth().signOut().then(() => {
      this.setState({logged:false})
      localStorage.removeItem('logged')
      window.location.replace('/home')
    })
  }

  componentDidMount(){
    let logged = JSON.parse(localStorage.getItem('logged'))
    if(logged){
      this.setState({logged:true})
    }else{
      this.setState({logged:false})
    }
  }

  _renderLog = () => {
    return this.state.logged ?
    <button type='button' className='btn btn-outline-success' onClick={this._logout}>
      Log out
    </button> :
    <div>
      <button type='button' className='btn btn-outline-success mr-1' onClick={this._login}>
        Log in
      </button>
    </div>
  }

  _renderProfile = () => {
    if(this.state.logged){
      return(
        <li className="nav-item puntero">
          <NavLink className="nav-link" to={'/profile'}>
            Profile
          </NavLink>
        </li>
      )
    }
  }

  render(){
    return(
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <span className="navbar-brand">
              <img src="logo192.png" width="30" height="30" alt="Logo"/>
          </span>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                  <li className="nav-item puntero">
                    <NavLink className="nav-link" to={'/home'}>
                      Home
                    </NavLink>
                  </li>
                  <li className="nav-item puntero">
                    <NavLink className="nav-link" to={'/search'}>
                      Search
                    </NavLink>
                  </li>
                  {this._renderProfile()}
              </ul>
          </div>
          <div className='text-right'>
            {this._renderLog()}
          </div>
      </nav>
    )
  }
}
