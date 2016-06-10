import React, {PropTypes} from 'react'
import {Link} from 'react-router'

const CourseListRow = ({ course }) => {
	return (
		<tr>
			<td><a href={course.watchHref} target="_blank">Watch</a></td>
			<td><Link to={'/course/' + course.id}>{course.title}</Link></td>
			<td>{course.authorI }</td>
			<td>{course.categor }</td>
			<td>{course.lengt }</td>
		</tr>
	)
}

CourseListRow.propTypes = {
	course: PropTypes.object.isRequired
}

export default CourseListRow
