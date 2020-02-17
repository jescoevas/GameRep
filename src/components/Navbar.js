import React, {Component} from 'react'
import {Link} from 'react-router-dom'

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
                    <Link className="nav-link" to={'/home'}>
                      Home
                    </Link>
                  </li>
                  <li className="nav-item puntero">
                    <Link className="nav-link" to={'/search'}>
                      Search
                    </Link>
                  </li>
                  <li className="nav-item puntero">
                    <Link className="nav-link" to={'/info'}>
                      Info
                    </Link>
                  </li>
              </ul>
          </div>
      </nav>
    )
  }
}
