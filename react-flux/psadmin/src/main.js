'use strict';

import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, NotFoundRoute, hashHistory } from 'react-router'
import App from './components/app'
import Home from './components/homePage'
import Authors from './components/authors/authorsPage'
import About from './components/about/aboutPage'
import NotFoundPage from './components/notFoundPage'
import ManageAuthorPage from './components/authors/manageAuthorPage'
import $ from 'jquery'

render((
	<Router history={ hashHistory }>
		<Route path='/' component={ App }>
			<IndexRoute component={ Home } />
			<Route path='authors' component={ Authors } />
			<Route path='about' component={ About } />
			<Route path='addAuthor' component={ ManageAuthorPage } />
			<Route path='*' component={ NotFoundPage } />
		</Route>
	</Router>), document.querySelector('[data-js="app"]')
);