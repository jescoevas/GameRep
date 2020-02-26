import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'

export class Navbar extends Component{
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
                  <li className="nav-item puntero">
                    <NavLink className="nav-link" to={'/info'}>
                      Info
                    </NavLink>
                  </li>
              </ul>
          </div>
      </nav>
    )
  }
}
