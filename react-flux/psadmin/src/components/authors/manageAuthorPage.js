'use strict';

import React from 'react';
import AuthorForm from './authorForm';

const ManageAuthorPage = React.createClass({
	render: () => {
		return (
			<div className='container-fluid'>
				<h1>Manager Author</h1>
				<AuthorForm />
			</div>
		);
	}
});

module.exports = ManageAuthorPage;