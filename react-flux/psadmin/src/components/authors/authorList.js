'use strict';

import React from 'react';
import { Link } from 'react-router';

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
				<td><Link to={ `author/${ author.id }` }>{ author.id }</Link></td>
				<td>{ author.firstName } { author.lastName }</td>
			</tr>
		);
	}
});

module.exports = AuthorList;