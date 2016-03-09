'use strict';

import React from 'react';
import AuthorActions from '../../actions/authorActions';
import AuthorStore from '../../stores/authorStore';
import AuthorList from './authorList';
import { Link } from 'react-router'

const Authors = React.createClass({
	getInitialState() {
		return {
			authors: AuthorStore.getAllAuthors()
		};
	},

	componentWillMount() {
		AuthorStore.addChangeListener(this._onChange)
	},

	componentWillUnmount() {
		AuthorStore.removeChangeListener(this._onChange)
	},

	_onChange() {
		this.setState({ authors: AuthorStore.getAllAuthors() })
	},

	render: function() {
		return (
			<div className='container-fluid'>
				<h1>Authors</h1>
				<Link to="addAuthor" className="btn btn-default">Add author</Link>
				<AuthorList authors={ this.state.authors } />
			</div>
		)
	}
});

module.exports = Authors;