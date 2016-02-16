'use strict';

const React = require('react');
const ReactDOM = require('react-dom');
const Router = require('react-router');
const Route = Router.Route;
const IndexRoute = Router.IndexRoute;

ReactDOM.render((
	<Router>
		<Route path='/' component={ require('./components/app') }>
			<IndexRoute component={ require('./components/homePage') } />
			<Route path='authors' component={ require('./components/authors/authorsPage') } />
			<Route path='about' component={ require('./components/about/aboutPage') } />
		</Route>
	</Router>
	), document.querySelector('[data-js="app"]')
);