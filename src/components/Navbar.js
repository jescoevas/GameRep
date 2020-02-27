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
    firebase.auth().signInWithPopup(provider).then(user => {
      this.setState({logged:true})
      localStorage.setItem('logged',JSON.stringify(user))
    })

  }

  _logout = () => {
    firebase.auth().signOut().then(res => {
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

  _renderResults = () => {
    return this.state.logged ?
    <button type='button' className='btn btn-outline-success' onClick={this._logout}>
      Log out
    </button> :
    <button type='button' className='btn btn-outline-success' onClick={this._login}>
      Log in
    </button>
  }

  _renderProfile = () => {
    if(this.state.logged){
      return <li className="nav-item puntero">
              <NavLink className="nav-link" to={'/profile'}>
                Profile
              </NavLink>
            </li>
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
            {this._renderResults()}
          </div>
      </nav>
    )
  }
}
