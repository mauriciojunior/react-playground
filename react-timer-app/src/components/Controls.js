import React, { Component } from 'react'

class Controls extends Component {
  constructor(props) {
    super(props)
  }

  onStatusChange = newStatus => () => this.props.onStatusChange(newStatus)

  render = () => {
    const { countdownStatus } = this.props

    return (
      <div>
        {countdownStatus === 'started' &&
          <button
            className="button secondary expanded"
            onClick={this.onStatusChange('paused')}
          >
            Pause
          </button>}
        {(countdownStatus === 'stopped' || countdownStatus === 'paused') &&
          <button
            className="button primary expanded"
            onClick={this.onStatusChange('started')}
          >
            Start
          </button>}
        {countdownStatus !== 'stopped' &&
          <button
            className="button alert hallow expanded"
            onClick={this.onStatusChange('stopped')}
          >
            Clear
          </button>}
      </div>
    )
  }
}

Controls.propTypes = {
  countdownStatus: React.PropTypes.string.isRequired,
  onStatusChange: React.PropTypes.func.isRequired
}

export default Controls
