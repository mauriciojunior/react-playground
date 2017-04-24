import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import ReactDOMServer from 'react-dom/server'

class ErrorModal extends Component {
  constructor (props) {
    super(props)

    this.props = {
      title: 'Error'
    }
  }

  componentDidMount = () => {
    const { title, message } = this.props
    
    const modalMarkup = (
      <div data-js='error-modal' className='reveal tiny text-center' data-reveal=''>
        <h4>{title}</h4>
        <p>{message}</p>
        <button className='button hollow entended' data-close=''>
          Okay!
        </button>
      </div>
    )

    const $modal = $(ReactDOMServer.renderToString(modalMarkup))
    $(ReactDOM.findDOMNode(this)).html($modal)

    new Foundation.Reveal($('[data-js="error-modal"]')).open()
  }

  render = () => {
    return <div />
  }
}

ErrorModal.propTypes = {
  title: React.PropTypes.string,
  message: React.PropTypes.string.isRequired
}

export default ErrorModal
