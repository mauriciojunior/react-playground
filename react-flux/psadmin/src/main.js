'use strict';

var React = require('react');
var Home = require('./components/homePage');
var ReactDOM = require('react-dom');
var About = require('./components/about/aboutPage');
var Header = require('./components/commons/header');
var Authors = require('./components/authors/authorsPage');

var App = React.createClass({
	render: function() {
		var Child;
		switch (this.props.route) {
			case 'about': Child = About; break;
			case 'authors': Child = Authors; break;
			default: Child = Home; break;
		}

		return (
			<div>
				<Header />
				<Child />
			</div>
		);
	}
});
function render() {
	console.log(window.location.hash.substr(1))
	ReactDOM.render(
		<App route={ window.location.hash.substr(1) } />,
		document.querySelector('[data-js="app"]')
	)
}

window.addEventListener('hashchange', render);
render();