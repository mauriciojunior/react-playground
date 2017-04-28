import React, { Component } from 'react'

class CountdownForm extends Component {
  constructor(props) {
    super(props)
  }

  onSubmit = e => {
    e.preventDefault()
    const seconds = this.refs.seconds.value

    if (seconds && seconds.match(/^[0-9]*$/)) {
      this.refs.seconds.value = ''
      this.props.onSetCountdown(+seconds)
    }
  }

  render = () => {
    return (
      <div>
        <form onSubmit={this.onSubmit} className="countdown-form">
          <input
            type="text"
            ref="seconds"
            placeholder="Enter time in seconds"
          />
          <button className="button expanded">Start</button>
        </form>
      </div>
    )
  }
}

export default CountdownForm
