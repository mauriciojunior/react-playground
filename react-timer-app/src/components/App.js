'use strict'

import React from 'react'
import Navigation from './Navigation'

const App = ({ children }) => (
  <div>
    <Navigation />
    <div className="row">
      <div className="column small-centered medium-6 large-4">
        {children}
      </div>
    </div>
  </div>
)

export default App
