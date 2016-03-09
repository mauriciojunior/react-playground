'use strict';

import React from 'react';
import { Router } from 'react-router';
import AuthorForm from './authorForm';
import AuthorActions from '../../actions/authorActions';
import AuthorStore from '../../stores/authorStore';
import toastr from 'toastr';

const ManageAuthorPage = React.createClass({
	contextTypes: {
    router: React.PropTypes.object
  },

  componentDidMount() {
    this.context.router.setRouteLeaveHook(this.props.route, this.routerWillLeave)
  },

  routerWillLeave(nextLocation) {
    if (this.state.dirty)
      return 'Your work is not saved! Are you sure you want to leave?'
  },

	getInitialState() {
		return {
			author: {
				id: '',
				firstName: '',
				lastName: ''
			},
			errors: {},
			dirty: false
		};
	},

	componentWillMount() {
		let authorId = this.props.params.id;

		if(authorId) {
			this.setState({
				author: AuthorStore.getAuthorById(authorId)
			})
		}
	},

	setAuthorState(event) {
		let field = event.target.name;
		let value = event.target.value;
		this.state.author[field] = value;
		return this.setState({
			dirty: true,
			author: this.state.author
		});
	},

	saveAuthor(event) {
		event.preventDefault();

		if(!this.authorFormIsValid()) return;

		if(this.state.author.id) AuthorActions.updateAuthor(this.state.author);
		else AuthorActions.createAuthor(this.state.author);

		toastr.success('Author saved.');
		this.setState({dirty: false});
    this.context.router.push('authors');
	},

	authorFormIsValid() {
		var formIsValid = true;
		this.state.error = {};

		if(this.state.author.firstName < 3) {
			this.state.errors.firstName = 'First name must be at least 3 chars';
			formIsValid = false;
		}

		if(this.state.author.lastName < 3) {
			this.state.errors.lastName = 'Last name must be at least 3 chars';
			formIsValid = false;
		}

		this.setState({errors: this.state.errors});
		return formIsValid;
	},

	render() {
		return (
			<div className='container-fluid'>
				<h1>Manager Author</h1>
				<AuthorForm
					author = { this.state.author }
					onChange = { this.setAuthorState }
					onSave = { this.saveAuthor }
					errors = { this.state.errors }
				/>
			</div>
		);
	}

});

module.exports = ManageAuthorPage;