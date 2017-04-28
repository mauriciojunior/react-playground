import React, { Component } from 'react'
import Clock from './Clock'
import CountdownForm from './CountdownForm'
import Controls from './Controls'

class Countdown extends Component {
  constructor(props) {
    super(props)

    this.state = {
      seconds: 0,
      countdownStatus: 'stopped'
    }
  }

  componentDidUpdate = (prevProps, prevState) => {
    const { countdownStatus } = this.state

    if (countdownStatus !== prevState.countdownStatus) {
      switch (countdownStatus) {
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
      const newCount = this.state.seconds - 1

      this.setState({
        seconds: newCount >= 0 ? newCount : 0
      })

      if (newCount === 0) this.setState({ countdownStatus: 'stopped' })
    }, 1000)
  }

  stopTimer = () => {
    clearInterval(this.timer)
    this.setState({
      seconds: 0
    })
  }

  handleSetCountDown = seconds => {
    this.setState({
      seconds,
      countdownStatus: 'started'
    })
  }

  onStatusChange = countdownStatus => {
    this.setState({
      countdownStatus
    })
  }

  render = () => {
    const { seconds, countdownStatus } = this.state

    return (
      <div>
        <h1 className="text-center">Countdown</h1>
        <Clock totalSeconds={seconds} />
        {countdownStatus === 'stopped' &&
          <CountdownForm onSetCountdown={this.handleSetCountDown} />}
        {countdownStatus !== 'stopped' &&
          <Controls
            countdownStatus={countdownStatus}
            onStatusChange={this.onStatusChange}
          />}
      </div>
    )
  }
}

export default Countdown
