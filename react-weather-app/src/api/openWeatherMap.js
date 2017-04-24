import axios from 'axios'
const OPEN_WEATHER_MAP_URL = `http://api.openweathermap.org/data/2.5/weather?appid=b8dfcf46bc61d0bf8b20988eb7b0a700&units=metric`

export function getTemp (location) {
  const encodedLocation = encodeURIComponent(location)
  const requestURL = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`

  return axios
    .get(requestURL)
    .then(res => res.data.main)
}
