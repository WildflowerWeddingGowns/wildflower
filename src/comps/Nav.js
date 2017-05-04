

import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'

export default class Nav extends Component{
  render(){
    return(
      <nav>

        <div className="nav-opts">
          <NavLink
            to="/inspiration"
            activeClassName="active"
            >
            INSPIRATION
          </NavLink>
          <NavLink
            to="/order"
            activeClassName="active"
            >
            ORDER
          </NavLink>
          <NavLink
            to="/planning"
            activeClassName="active"
            >
            PLANNING
          </NavLink>
        </div>
        <div className="nav-logo">
          <NavLink
            exact
            to='/'
            activeClassName='active'
            >
            WWG
          </NavLink>
        </div>

      </nav>
    )
  }
}
