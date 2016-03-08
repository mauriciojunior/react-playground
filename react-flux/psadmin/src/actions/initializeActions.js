import Dispatcher from '../dispatcher/appDispatcher'
import ActionTypes from '../constants/actionTypes'
import AuthorApi from '../api/authorsApi'

const InitializeActions = {
	initApp() {
		Dispatcher.dispatch({
			actionType: ActionTypes.INITIALIZE,
			initialData: {
				authors: AuthorApi.getAllAuthors()
			}
		});
	}
};

module.exports = InitializeActions;