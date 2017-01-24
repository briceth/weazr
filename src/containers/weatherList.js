import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/googleMap';


class WeatherList extends Component {

  renderWeather(dataCity) {
    const name = dataCity.city.name
    const temps = dataCity.list.map(weather => weather.main.temp)
    const pressure = dataCity.list.map(pressure => pressure.main.pressure)
    const humidity = dataCity.list.map(humidity => humidity.main.humidity)
    const { lon, lat } = dataCity.city.coord

    return (
      <tr key={name}>
        <td><GoogleMap lat={lat} lon={lon}/></td>
        <td><Chart temps={temps} color="orange" units="K"/></td>
        <td><Chart temps={pressure} color="blue" units="hPa" /></td>
        <td><Chart temps={humidity} color="red" units="%" /></td>
      </tr>
    )
  }

  render() {
    return (
      <table className="pt-table .modifier">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature(K)</th>
            <th>Pressure(hPa)</th>
            <th>Humidity(%)</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    )
  }
}

function mapStateToProps({ weather }) {//same as const weather = state.weather
  return { weather } //same as { weather } === { weather: weather }
}
export default connect(mapStateToProps)(WeatherList)
//we export the connected version of the two components so above we delete the export default
