'use strict';

import React from 'react';

const AuthorForm = React.createClass({
	render() {
		return (
			<form>
				<label htmlFor="firstName">First Name</label>
				<input type="text"
					name="firstName"
					className="form-control"
					placeholder="First Name"
					ref="firstName"
					onChange = { this.props.onChange }
					value = { this.props.author.firstName }
				/>
				<br />
				<label htmlFor="lastName">Last Name</label>
				<input type="text"
					name="lastName"
					className="form-control"
					placeholder="First Name"
					ref="lastName"
					onChange = { this.props.onChange }
					value = { this.props.author.lastName }
				/>
				<br />
				<input type="submit" value="Save" className="btn btn-default" />
			</form>
		);
	}
});

module.exports = AuthorForm;