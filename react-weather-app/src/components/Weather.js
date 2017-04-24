'use strict'

import React, { Component } from 'react'
import WeatherForm from './WeatherForm'
import WeatherMessage from './WeatherMessage'
import { getTemp } from '../api/openWeatherMap'
import ErrorModal from './ErrorModal'

class Weather extends Component {
  constructor () {
    super()
    this.state = {
      isLoading: false
    }
  }

  componentDidMount = () => {
    const location = this.props.location.query.location

    location && location.length && this.onSubmit(location)
  }

  componentWillReceiveProps = (newProps) => {
    const location = newProps.location.query.location

    location && location.length && this.onSubmit(location)
  }

  onSubmit = (location) => {
    if (!location) return
    
    this.setState({ isLoading: true })
    getTemp(location)
      .then(({ temp }) => {
        this.setState({
          temp,
          location,
          isLoading: false
        })
      }).catch(e => {
        this.setState({
          errorMessage: 'Unable to fetch weather for that location.',
          isLoading: false
        })
      })
  }

  render () {
    const { isLoading, location, temp, errorMessage } = this.state

    return (
      <div>
        <h1 className='text-center page-title'>Get Weather</h1>
        <WeatherForm onSubmit={this.onSubmit} />
        { isLoading && <p className='text-center'>Fetching weather</p> }
        { !isLoading && location && <WeatherMessage location={location} temp={temp} /> }
        { errorMessage && <ErrorModal message={errorMessage} showModal /> }
      </div>
    )
  }
}

export default Weather
