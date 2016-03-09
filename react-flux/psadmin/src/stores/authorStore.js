import Dispatcher from '../dispatcher/appDispatcher';
import ActionTypes from '../constants/actionTypes';
import { EventEmitter } from 'events';
import assign from 'object-assign';
import _ from 'lodash';
const CHANGE_EVENT = 'change';

let _authors = [];

const AuthorStore = assign({}, EventEmitter.prototype, {
	addChangeListener(callback) {
		this.on(CHANGE_EVENT, callback);
	},

	removeChangeListener(callback) {
		this.removeListener(CHANGE_EVENT, callback);
	},

	emitChange() {
		this.emit(CHANGE_EVENT)
	},

	getAllAuthors() {
		return _authors;
	},

	getAuthorById(id) {
		return _.find(_authors, {id: id});
	}
});

Dispatcher.register((action) => {
	switch(action.actionType) {
		case ActionTypes.INITIALIZE:
			_authors = action.initialData.authors;
			AuthorStore.emitChange();
			break;
		case ActionTypes.CREATE_AUTHOR:
			_authors.push(action.author);
			AuthorStore.emitChange();
			break;
		case ActionTypes.UPDATE_AUTHOR:
			let existingAuthor = _.find(_authors, { id: action.author.id });
			let existingAuthorIndex = _.indexOf(_authors, existingAuthor);
			_authors.splice(existingAuthorIndex, 1, action.author);
			AuthorStore.emitChange();
			break;
	}
});

module.exports = AuthorStore;