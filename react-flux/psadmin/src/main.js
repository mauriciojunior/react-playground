'use strict';

var React = require('react');
var ReactDOM = require('react-dom');
var Router = require('react-router');
var Route = Router.Route;
var IndexRoute = Router.IndexRoute;

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