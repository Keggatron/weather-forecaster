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
    const path = this.props.path;
    const city = this.state.city;


    return (
      <div className='col-xs-6'>
        <form onSubmit = { this.handleSubmit }>
          <input 
            id='city'
            type='text' 
            placeholder='enter city' 
            onChange={this.handleChange}
            value={this.state.city}
            className = 'form-control'
          />
          </form>
          <Link
            className='btn btn-success'
            to = {
              {
                pathname: path + 'forecast',
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
