'use strict'

import React from 'react'
import Nav from './Nav'

const App = ({ children }) => (
  <div>
    <Nav />
    <div className='row'>
      <div className='columns medium-6 large-4 small-centered'>
        {children}
      </div>
    </div>
  </div>
)

export default App
