'use strict';

var React = require('react');
var AuthorsApi = require('../../api/authorsApi');

var Authors = React.createClass({
	getInitialState: function() {
		return {
			authors: []
		};
	},
	componentWillMount: function() {
		this.setState({
			authors: AuthorsApi.getAllAuthors()
		});
	},
	render: function() {
		return (
			<div>
				<h1>Authors</h1>

				<table className='table'>
					<thead>
						<th>ID</th>
						<th>Name</th>
					</thead>
					<tbody>
						{ this.state.authors.map( this.createAuthorRow ) }
					</tbody>
				</table>
			</div>
		)
	},
	createAuthorRow: function( author ) {
		return (
			<tr key={ author.id }>
				<td><a href={ '#/authors/' + author.id }>{ author.id }</a></td>
				<td>{ author.firstName } { author.lastName }</td>
			</tr>
		);
	}
});

module.exports = Authors;