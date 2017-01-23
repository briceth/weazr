import React, { Component } from 'react';
import { connect } from 'react-redux';

class WeatherList extends Component {

  renderWeather(dataCity) {
    const name = dataCity.city.name
    return (
      <tr key={name}>
        <td>{name}</td>
      </tr>
    )
  }

  render() {
    return (
      <table className="pt-table .modifier">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature</th>
            <th>Pressure</th>
            <th>Humidity</th>
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
