import React, { Component } from 'react'
import Clock from './Clock'
import Controls from './Controls'

class Timer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      seconds: 0,
      timerStatus: 'stopped'
    }
  }

  componentDidUpdate = (prevProps, prevState) => {
    const { timerStatus } = this.state

    if (timerStatus !== prevState.timerStatus) {
      switch (timerStatus) {
        case 'started':
          this.startTimer()
          break
        case 'stopped':
          this.stopTimer()
          break
        case 'paused':
          clearInterval(this.timer)
      }
    }
  }

  componentWillUnmount = () => clearInterval(this.timer)

  startTimer = () => {
    this.timer = setInterval(() => {
      this.setState({
        seconds: this.state.seconds + 1
      })
    }, 1000)
  }

  stopTimer = () => {
    clearInterval(this.timer)
    this.setState({
      seconds: 0
    })
  }

  onStatusChange = timerStatus => {
    this.setState({
      timerStatus
    })
  }

  render = () => {
    const { seconds, timerStatus } = this.state

    return (
      <div>
        <h1 className="text-center">Timer</h1>
        <Clock totalSeconds={seconds} />
        <Controls
          countdownStatus={timerStatus}
          onStatusChange={this.onStatusChange}
        />
      </div>
    )
  }
}

export default Timer
