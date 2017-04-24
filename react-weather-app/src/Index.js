'use strict'

import React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import { Route, Router, IndexRoute, hashHistory } from 'react-router'
import App from './components/App'
import Weather from './components/Weather'
import About from './components/About'
import Examples from './components/Examples'

import 'style!css!foundation-sites/dist/foundation.min.css'
$(document).foundation()

import 'style!css!sass!./styles/app.scss'

doRender(App)

if (module.hot) {
  module.hot.accept('./components/App', () => {
    const nextApp = require('./components/App').default

    doRender(nextApp)
  })
}

function doRender (App) {
  render(
    <AppContainer>
      <Router history={hashHistory}>
        <Route path='/' component={App}>
          <Route path='about' component={About} />
          <Route path='examples' component={Examples} />
          <IndexRoute component={Weather} />
        </Route>
      </Router>
    </AppContainer>,
    document.querySelector('[data-js="app"]')
  )
}
