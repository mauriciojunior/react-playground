'use strict';

var React = require('react');
var Home = require('./components/homePage');
var ReactDOM = require('react-dom');

ReactDOM.render(
	<Home />,
	document.querySelector('[data-js="app"]')
);