'use strict'

import React, { Component } from 'react'
import { Link, IndexLink } from 'react-router'

class Nav extends Component {
  constructor () {
    super()
  }

  onSubmit = (e) => {
    e.preventDefault()

    const location = this.refs.search.value
    const encodedLocation = encodeURIComponent(location)

    if (location.length) {
      this.refs.search.value = ''
      window.location.hash = `#/?location=${encodedLocation}`
    }
  }

  render = () => {
    return (
      <div className='top-bar'>
        <div className='top-bar-left'>
          <ul className='menu'>
            <li className='menu-text'>React Weather App</li>
            <li>
              <IndexLink to='/' activeClassName='active' activeStyle={{ fontWeight: 'bold' }}>Get Weather</IndexLink>          
            </li>
            <li>
              <Link to='/about' activeClassName='active' activeStyle={{ fontWeight: 'bold' }}>About</Link>          
            </li>
            <li>
              <Link to='/examples' activeClassName='active' activeStyle={{ fontWeight: 'bold' }}>Examples</Link>            
            </li>
          </ul>
        </div>
        <div className='top-bar-right'>
          <form onSubmit={this.onSubmit}>
            <ul className='menu'>
              <li>
                <input 
                  type='search'
                  ref='search'
                  placeholder='Search weather by city' />
              </li>
              <li>
                <button className='button'>Get Weather</button>
              </li>
            </ul>
          </form>
        </div>
      </div>
    )
  }
}

export default Nav
