import React, {PropTypes} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as courseActions from '../../actions/courseActions'
import CourseForm from './CourseForm'
import authorsFormattedForDropDowns from '../../selectors/selectors'
import toastr from 'toastr'

export class ManageCoursePage extends React.Component {
	constructor (props, context) {
		super(props, context)

		this.state = {
			course: Object.assign({}, props.course),
			errors: {},
			saving: false
		}

		this.updateCourseState = this.updateCourseState.bind(this)
		this.saveCourse = this.saveCourse.bind(this)
	}

	componentWillReceiveProps (nextProps) {
		if (this.props.course.id !== nextProps.course.id) {
			this.setState({ course: Object.assign({}, nextProps.course) })
		}
	}

	saveCourse (event) {
		event.preventDefault()

		if (!this.courseFormIsValid()) return

		this.setState({ saving: true })
		this.props.actions.saveCourse(this.state.course)
			.then(() => this.redirect())
			.catch(error => {
				toastr.error(error)
				this.setState({ saving: false })
			})
	}

	courseFormIsValid () {
		let formIsValid = true
		let errors = {}

		if (this.state.course.title.length < 5) {
			errors.title = 'Title must be at least 5 characters.'
			formIsValid = false
		}

		this.setState({ errors })

		return formIsValid
	}

	redirect () {
		this.setState({ saving: true })
		toastr.success('Course saved')
		this.context.router.push('/courses')
	}

	updateCourseState (event) {
		const field = event.target.name
		const course = this.state.course
		course[field] = event.target.value
		return this.setState({ course: course })
	}

	render () {
		const {course, errors, saving} = this.state
		const {authors} = this.props
		return (
			<CourseForm
				allAuthors={authors}
				onChange={this.updateCourseState}
				onSave={this.saveCourse}
				course={course}
				errors={errors}
				saving={saving}/>
		)
	}
}

ManageCoursePage.contextTypes = {
	router: PropTypes.object.isRequired
}

ManageCoursePage.propTypes = {
	course: PropTypes.object.isRequired,
	authors: PropTypes.array.isRequired,
	actions: PropTypes.object.isRequired
}

function mapStateToProps (state, ownProps) {
	let course = { id: '', watchHref: '', title: '', authorId: '', length: '', category: '' }
	const courseId = ownProps.params.id

	if (courseId) course = getCourseById(state.courses, courseId)

	return {
		course,
		authors: authorsFormattedForDropDowns(state.courses)
	}
}

function getCourseById (courses, id) {
	const course = courses.filter(course => course.id === id)
	if (!course) return null
	return course[0]
}

function mapDispatchToProps (dispatch) {
	return {
		actions: bindActionCreators(courseActions, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage)
