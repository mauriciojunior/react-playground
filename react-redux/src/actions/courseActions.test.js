import expect from 'expect'
import * as courseActions from './courseActions'
import * as types from './actionTypes'

import thunk from 'redux-thunk'
import nock from 'nock'
import configurationMockStore from 'redux-mock-store'

// Test a sync action
describe('Course Actions', () => {
	describe('createCourseSuccess', () => {
		it('should create a CREATE_COURSES_SUCCESS action', () => {
			// arrange
			const course = { id: 'clean-code', title: 'Clean Code' }
			const expectedAction = {
				type: types.CREATE_COURSES_SUCCESS,
				course
			}

			// act
			const action = courseActions.createCourseSuccess(course)

			// assert
			expect(action).toEqual(expectedAction)
		})
	})
})

const middleware = [thunk]
const mockStore = configurationMockStore(middleware)

describe('Asyn Actions', () => {
	afterEach(() => nock.cleanAll())
	it('should create BEGIN_AJAX_CALL and LOAD_COURSE_SUCCESS when loading courses', (done) => {
		const expectedAction = [
			{ type: types.BEGIN_AJAX_CALL },
			{ type: types.LOAD_COURSE_SUCCESS, body: { courses: [{ id: 'clean-code', title: 'Clean Code' }] } }
		]

		const store = mockStore({ courses: [] }, expectedAction)
		store.dispatch(courseActions.loadCourses()).then(() => {
			const actions = store.getActions()
			expect(actions[0].type).toEqual(types.BEGIN_AJAX_CALL)
			expect(actions[1].type).toEqual(types.LOAD_COURSE_SUCCESS)
		})
		done()
	})
})