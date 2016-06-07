import expect from 'expect'
import React from 'react'
import TestUtils from 'react-addons-test-utils'
import CourseForm from './CourseForm'

function setup () {
	const props = {
		course: {},
		saving: false,
		errors: {},
		onSave: () => {},
		onChange: () => {}
	}

	const renderer = TestUtils.createRenderer()
	renderer.render(<CourseForm {...props} />)
	const output = renderer.getRenderOutput()

	return {
		props,
		output,
		renderer
	}
}

describe('CourseForm via React Test Utils', () => {
	it('renders form and h1', (done) => {
		const { output } = setup()
		expect(output.type).toBe('form')
		done()
	})
})