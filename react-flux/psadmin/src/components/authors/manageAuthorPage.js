'use strict';

import React from 'react';
import { Router } from 'react-router';
import AuthorForm from './authorForm';
import AuthorsApi from './../../api/authorsApi';

const ManageAuthorPage = React.createClass({
	contextTypes: {
    router: React.PropTypes.object.isRequired
  },
	getInitialState() {
		return {
			author: {
				id: '',
				firstName: '',
				lastName: ''
			}
		};
	},
	setAuthorState(event) {
		let field = event.target.name;
		let value = event.target.value;
		this.state.author[field] = value;
		return this.setState({
			author: this.state.author
		});
	},
	saveAuthor(event) {
		event.preventDefault();
		AuthorsApi.saveAuthor(this.state.author);
    this.context.router.push('authors');
	},
	render() {
		return (
			<div className='container-fluid'>
				<h1>Manager Author</h1>
				<AuthorForm
					author = { this.state.author }
					onChange = { this.setAuthorState }
					onSave = { this.saveAuthor }
				/>
			</div>
		);
	}
});

module.exports = ManageAuthorPage;