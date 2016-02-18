'use strict';

import React from 'react';
import { Link } from 'react-router';

const NotFoundPage = React.createClass({
	render: () => {
		return (
			<div className='container-fluid'>
				<h1>Page Not Found</h1>
				<p>Woops! Sorry, there is nothing to see here.</p>
				<p><Link to='/'>Back to Home</Link></p>
			</div>
		);
	}
});

module.exports = NotFoundPage;