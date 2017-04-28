'use strict'

import React from 'react'
import { Link, IndexLink } from 'react-router'

const Navigation = () => (
  <div className="top-bar">
    <div className="top-bar-left">
      <ul className="menu">
        <li className="menu-text">React Timer App</li>
        <li>
          <IndexLink to="/" activeClassName="active">Timer</IndexLink>
        </li>
        <li>
          <Link to="/countdown" activeClassName="active">Countdown</Link>
        </li>
      </ul>
    </div>
  </div>
)

export default Navigation
