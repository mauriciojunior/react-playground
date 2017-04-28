import React from 'react'
import ReactDOM from 'react-dom'
import expect from 'expect'
import TestUtils from 'react-addons-test-utils'
import $ from 'jquery'
import Clock from '../../components/Clock'

describe('Clock', () => {
  it('should exist', () => {
    expect(Clock).toExist()
  })

  describe('render', () => {
    it('should render clock to output', () => {
      const clock = TestUtils.renderIntoDocument(<Clock totalSeconds={62} />)
      const $el = $(ReactDOM.findDOMNode(clock))
      const actual = $el.find('.clock-text').text()
      const expected = '01:02'

      expect(actual).toBe(expected)
    })
  })

  describe('format seconds', () => {
    it('should format seconds', () => {
      const clock = TestUtils.renderIntoDocument(<Clock />)
      const seconds = 615
      const expected = '10:15'
      const actual = clock.formatSeconds(seconds)

      expect(actual).toBe(expected)
    })

    it('should format seconds when min/sec are less than 10', () => {
      const clock = TestUtils.renderIntoDocument(<Clock />)
      const seconds = 61
      const expected = '01:01'
      const actual = clock.formatSeconds(seconds)

      expect(actual).toBe(expected)
    })
  })
})
