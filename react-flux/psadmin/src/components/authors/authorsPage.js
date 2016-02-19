'use strict';

import React from 'react';
import AuthorsApi from '../../api/authorsApi';
import AuthorList from './authorList';
import { Link } from 'react-router'

const Authors = React.createClass({
	getInitialState: function() {
		return {
			authors: []
		};
	},
	componentDidMount: function() {
		if(this.isMounted()) {
			this.setState({
				authors: AuthorsApi.getAllAuthors()
			});
		}
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