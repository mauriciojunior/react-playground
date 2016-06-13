'use strict'

import React from 'react'
import Header from './commons/header'

const App = React.createClass({
	render: function () {
		return (
			<div>
				<Header />
				{ this.props.children }
			</div>
		)
	}
})

module.exports = App
