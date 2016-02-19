'use strict';
import React from 'react';

const Home = React.createClass({
	render: function() {
		return (
			<div className='container-fluid'>
				<div className="jumbotron">
					<h1>Pluralsight Administration</h1>
					<p>React, React Router and Flux for ultra-responsive web apps.</p>
				</div>
			</div>
		);
	}
});

module.exports = Home;