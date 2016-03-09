'use strict';

import React from 'react';
import { Link } from 'react-router';
import AuthorActions from '../../actions/authorActions';
import toastr from 'toastr';

const AuthorList = React.createClass({
	render() {
		return (
			<div>
				<table className='table'>
					<thead>
						<tr></tr>
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
	createAuthorRow(author) {
		return (
			<tr key={ author.id }>
				<td><a href="#" onClick={ this.deleteAuthor.bind(this, author.id) }>Delete</a></td>
				<td><Link to={ `author/${ author.id }` }>{ author.id }</Link></td>
				<td>{ author.firstName } { author.lastName }</td>
			</tr>
		);
	},
	deleteAuthor(id, event) {
		event.preventDefault();
		console.log(this)
		AuthorActions.deleteAuthor(id);
		toastr.success('Author Deleted');
	}
});

module.exports = AuthorList;