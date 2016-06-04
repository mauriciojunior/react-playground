import React, {PropTypes} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as courseActions from '../../actions/courseActions'
import CourseForm from './CourseForm'

class ManageCoursePage extends React.Component {
	constructor (props, context) {
		super(props, context)

		this.state = {
			course: Object.assign({}, props.course),
			errors: {}
		}

		this.updateCourseState = this.updateCourseState.bind(this)
	}

	updateCourseState (event) {
		const field = event.target.name
		const course = this.state.course
		course[field] = event.target.value
		return this.setState({ course: course })
	}

	render () {
		const {course, errors} = this.state
		const {authors} = this.props
		return (
			<CourseForm
				allAuthors={authors}
				onChange={this.updateCourseState}
				course={course}
				errors={errors} />
		)
	}
}

ManageCoursePage.propTypes = {
	course: PropTypes.object.isRequired,
	authors: PropTypes.array.isRequired
}

function mapStateToProps (state, ownProps) {
	let course = { id: '', watchHref: '', title: '', authorId: '', length: '', category: '' }
	const authorsFormattedForDropDowns = state.authors.map(author => {
		return {
			value: author.id,
			text: author.firstName + ' ' + author.lastName
		}
	})
	return {
		course,
		authors: authorsFormattedForDropDowns
	}
}

function mapDispatchToProps (dispatch) {
	return {
		actions: bindActionCreators(courseActions, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage)
