import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { SideNavButton } from '../Utilitys/Utils'
import './NavBar.css'

export default class NavBar extends Component {
  render() {
    return (
      <nav className='NavBar'>
        <div className='logo'>
          <Link to="/">Pandemic Dog Walking</Link>
        </div>
        <div className='spacer' />
        <div className='right-nav'>
          <ul>
            <li>
              <Link to="/">
                Home
              </Link>
            </li>
            <li>
              <Link to="/Service">
                Services
              </Link>
            </li>
            <li>
              <Link to="/Walkers">
                Walkers
              </Link>
            </li>
            <li>
              <Link to='/Profile'>
                Profile
              </Link>
            </li>
          </ul>
        </div>
          <SideNavButton />
        
      </nav>
    )
  }
}
