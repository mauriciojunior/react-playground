'use strict'

import React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import { Route, Router, IndexRoute, hashHistory } from 'react-router'
import App from './components/App'

import Timer from './components/Timer'
import Countdown from './components/Countdown'

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

function doRender(App) {
  render(
    <AppContainer>
      <Router history={hashHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={Timer} />
          <Route path="countdown" component={Countdown} />
        </Route>
      </Router>
    </AppContainer>,
    document.querySelector('[data-js="app"]')
  )
}
