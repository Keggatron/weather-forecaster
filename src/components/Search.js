import React, { Component } from 'react';
import { Link } from 'react-router-dom';


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
    console.log('handled')
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
      <span>
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
              search: `?city=` + city,
              state: { city: this.state.city }
            }
          }
        >
          Get Weather
        </Link>
      </span>

    )
  }
}

export default Search
