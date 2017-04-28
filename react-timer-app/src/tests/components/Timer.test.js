import React from 'react'
import ReactDOM from 'react-dom'
import expect from 'expect'
import TestUtils from 'react-addons-test-utils'
import $ from 'jquery'

import Timer from '../../components/Timer'

describe('Timer', () => {
  it('should exist', () => {
    expect(Timer).toExist()
  })

  it('should start timer on started status', done => {
    const timer = TestUtils.renderIntoDocument(<Timer />)

    timer.onStatusChange('started')
    expect(timer.state.seconds).toBe(0)

    setTimeout(() => {
      expect(timer.state.timerStatus).toBe('started')
      expect(timer.state.seconds).toBe(1)
      done()
    }, 1001)
  })

  it('should pause timer on paused status', done => {
    const timer = TestUtils.renderIntoDocument(<Timer />)

    timer.setState({ seconds: 10 })
    timer.onStatusChange('started')
    timer.onStatusChange('paused')

    setTimeout(() => {
      expect(timer.state.timerStatus).toBe('paused')
      expect(timer.state.seconds).toBe(10)
      done()
    }, 1001)
  })

  it('should clear timer on stopped status', done => {
    const timer = TestUtils.renderIntoDocument(<Timer />)

    timer.setState({ seconds: 10 })
    timer.onStatusChange('started')
    timer.onStatusChange('stopped')

    setTimeout(() => {
      expect(timer.state.timerStatus).toBe('stopped')
      expect(timer.state.seconds).toBe(0)
      done()
    }, 1001)
  })
})
