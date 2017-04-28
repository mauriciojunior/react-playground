import React from 'react'
import ReactDOM from 'react-dom'
import expect from 'expect'
import TestUtils from 'react-addons-test-utils'
import $ from 'jquery'

import Countdown from '../../components/Countdown'

describe('Countdown', () => {
  it('should exist', () => {
    expect(Countdown).toExist()
  })

  describe('handleSetCountDown function', () => {
    it('should set state to started and countdown', done => {
      const countdown = TestUtils.renderIntoDocument(<Countdown />)
      countdown.handleSetCountDown(10)

      expect(countdown.state.seconds).toBe(10)
      expect(countdown.state.countdownStatus).toBe('started')

      setTimeout(() => {
        expect(countdown.state.seconds).toBe(9)
        done()
      }, 1001)
    })

    it('should not set count less than zero', done => {
      const countdown = TestUtils.renderIntoDocument(<Countdown />)
      countdown.handleSetCountDown(1)

      setTimeout(() => {
        expect(countdown.state.seconds).toBe(0)
        done()
      }, 3000)
    })

    it('should pause countdown on paused status', done => {
      const countdown = TestUtils.renderIntoDocument(<Countdown />)
      countdown.handleSetCountDown(3)
      countdown.onStatusChange('paused')

      setTimeout(function() {
        expect(countdown.state.seconds).toBe(3)
        expect(countdown.state.countdownStatus).toBe('paused')
        done()
      }, 1001)
    })

    it('should reset seconds on stopped status', done => {
      const countdown = TestUtils.renderIntoDocument(<Countdown />)
      countdown.handleSetCountDown(3)
      countdown.onStatusChange('stopped')

      setTimeout(function() {
        expect(countdown.state.seconds).toBe(0)
        expect(countdown.state.countdownStatus).toBe('stopped')
        done()
      }, 1001)
    })
  })
})
