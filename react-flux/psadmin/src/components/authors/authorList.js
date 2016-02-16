'use strict';

const React = require('react');

const AuthorList = React.createClass({
	render: function() {
		return (
			<div>
				<table className='table'>
					<thead>
						<tr>ID</tr>
						<tr>Name</tr>
					</thead>
					<tbody>
						{ this.props.authors.map( this.createAuthorRow ) }
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

module.exports = AuthorList;