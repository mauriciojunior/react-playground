'use strict'

import React, { Component } from 'react'

class WeatherForm extends Component {
  constructor () {
    super()
  }

  render = () => {
    const { onSubmit } = this.props

    return (
      <form onSubmit={(e) => {
        e.preventDefault()
        onSubmit(this.refs.search.value)
        this.refs.search.value = ''
      }}>
        <input 
          type='search'
          placeholder='Search weather by city'
          ref='search' />
        <button className='button expanded hollow'>Get Weather</button>
      </form>
    )
  }
}
export default WeatherForm
