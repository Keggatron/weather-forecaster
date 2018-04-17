import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import Forecast from './Forecast';

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      city: '',
      cityData: null,
      fireRedirect: false
    }

    this.handleChange = this.handleChange.bind(this)

  }

  handleChange(event) {
    var value = event.target.value;

    this.setState(() => {
      return {
        city: value
      }
    });
  }


  render() {
    const match = this.props.match;
    const city = this.state.city;


    return (
      <div className='container boxing' align='center'>
        <form className='column' onSubmit={this.handleSubmit}>
          <label> <h1>Enter a City</h1> </label>
          <input 
            id='city'
            type='text' 
            placeholder='enter city' 
            onChange={this.handleChange}
            value={this.state.city}
          />
          </form>
          <Link
            className='btn btn-success'
            to = {
              {
                pathname: match.path + 'forecast',
                search: `?city=` + city
              }
            }
              disable={!this.state.city}
          >
            Get Weather
          </Link>
        
      </div>
    )
  }
}

export default Search
