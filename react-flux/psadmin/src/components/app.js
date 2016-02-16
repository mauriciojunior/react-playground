'use strict';

const React = require('react');
const Header = require('./commons/header');

const App = React.createClass({
	render: function() {
		return (
			<div>
				<Header />
				{ this.props.children }
			</div>
		);
	}
});

module.exports = App;