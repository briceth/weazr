import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';


class searchBar extends Component {
  constructor(props){
    super(props)

    this.state = { term: '' }

    this.onInputchange = this.onInputchange.bind(this)
    this.onFormSubmit = this.onFormSubmit.bind(this)
  }

  onInputchange(event) {
    this.setState({term: event.target.value})
  }

  onFormSubmit(event) {
    //we dont want the form try to submit because we need to get and fetch weather data
    event.preventDefault();
    //we need to go and fetch weather data
    this.props.fetchWeather(this.state.term)
    this.setState({term: ''})
  }

  render() {
    return(
      <form onSubmit={this.onFormSubmit} className='pt-input-group .pt-inline'>
        <input
        className="pt-input"
        type="search"
        placeholder="Search input"
        dir="auto"
        value={this.state.term}
        onChange={this.onInputchange} />
        <span className='input-group-btn'>
          <button type='submit' className='pt-button pt-intent-success'>Submit</button>
        </span>
      </form>

    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWeather }, dispatch)
}

//nul means that we dont need any state here
export default connect(null, mapDispatchToProps)(searchBar)
