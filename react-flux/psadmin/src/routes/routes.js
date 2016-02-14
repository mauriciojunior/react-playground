'use strict';

var React = require('react');
var Router = require('react-router');
var DefaultRoute = Router.DefaultRoute;
var Route = Router.Route;
var IndexRoute = Router.IndexRoute;

var routes = (
	<Route path='/' component={ require('../components/app') }>
		<IndexRoute component={ require('../components/homePage') } />
		<Route path='authors' component={ require('../components/authors/authorsPage') } />
		<Route path='about' component={ require('../components/about/aboutPage') } />
	</Route>
);

module.exports = routes;