import axios from 'axios';

const API_KEY = '0f0c43317c17947d43c31709dd427702'
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`

export const FETCH_WEATHER = 'FETCH_WEATHER'

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request
  }
}
//http://api.openweathermap.org/data/2.5/forecast?appid=0f0c43317c17947d43c31709dd427702&q=new-york,us
