'use strict';

import React from 'react';
import AuthorForm from './authorForm';

var ManageAuthorPage = React.createClass({
	getInitialState: () => {
		return {
			author: {
				id: '',
				firstName: '',
				lastName: ''
			}
		};
	},
	setAuthorState: (event) => {
		let field = event.target.name;
		let value = event.target.value;
		this.state.author[field] = value;
		return this.setState({
			author: this.state.author
		});
	},
	render: () => {
		return (
			<div className='container-fluid'>
				<h1>Manager Author</h1>
				<AuthorForm
					author = { this.state.author }
					onChange = { this.setAuthorState }
				/>
			</div>
		);
	}
});

module.exports = ManageAuthorPage;