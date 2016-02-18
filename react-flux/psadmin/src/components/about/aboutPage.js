'use strict';

import React from 'react';

const About = React.createClass({
	render: function() {
		return (
			<div className='container-fluid'>
				<h1>About</h1>
				<p>This application uses the following technologies:</p>
				<ul>
						<li>React</li>
						<li>React Router</li>
						<li>Flux</li>
						<li>Node</li>
						<li>Gulp</li>
						<li>Browserify</li>
				</ul>
			</div>
		);
	}
});

module.exports = About;