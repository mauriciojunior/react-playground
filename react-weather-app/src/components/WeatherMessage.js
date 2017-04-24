'use strict'

import React from 'react'

const WeatherMessage = ({ temp, location }) => (
  <p className='text-center'>It's it {temp} ºC in {location}</p>
)

export default WeatherMessage
