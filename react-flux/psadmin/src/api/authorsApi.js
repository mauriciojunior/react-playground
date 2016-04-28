'use strict';

import { authors } from './authorData';
import _ from 'lodash';


const _generateId = function(author) {
	return author.firstName.toLowerCase().trim() + '-' + author.lastName.toLowerCase().trim();
};

const AuthorApi = {
	getAllAuthors() {
		return authors;
	},

	getAuthorById(id) {
		return _.find(authors, { id: id });
	},

	saveAuthor(author) {
		console.log('Pretend this just saved the author to the DB via AJAX call...');

		if (!author.id) {
			author.id = _generateId(author);
			authors.push(author);
		}

		return author;
	},

	deleteAuthor(id) {
		console.log('Pretend this just deleted the author from the DB via an AJAX call...');
	}
};

module.exports = AuthorApi;
