import Dispatcher from '../dispatcher/appDispatcher';
import AuthorApi from '../api/authorsApi';
import ActionTypes from '../constants/actionTypes';

const AuthorActions = {
	createAuthor(author) {
		let newAuthor = AuthorApi.saveAuthor(author);

		Dispatcher.dispatch({
			actionType: ActionTypes.CREATE_AUTHOR,
			author: newAuthor
		})
	},

	updateAuthor(author) {
		let updatedAuthor = AuthorApi.saveAuthor(author);

		Dispatcher.dispatch({
			actionType: ActionTypes.UPDATE_AUTHOR,
			author: updatedAuthor
		})
	},

	deleteAuthor(id) {
		AuthorApi.deleteAuthor(id);

		Dispatcher.dispatch({
			actionType: ActionTypes.DELETE_AUTHOR,
			id: id
		})
	}
};

module.exports = AuthorActions;