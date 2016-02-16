'use strict';

const React = require('react');
const AuthorsApi = require('../../api/authorsApi');
const AuthorList = require('./authorList');

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
				<AuthorList authors={ this.state.authors } />
			</div>
		)
	}
});

module.exports = Authors;