'use strict';

var React = require('react');
var AuthorsApi = require('../../api/authorsApi');
var AuthorList = require('./authorList');

var Authors = React.createClass({
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