'use strict';

var React = require('react');
var Header = require('./commons/header');

var App = React.createClass({
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