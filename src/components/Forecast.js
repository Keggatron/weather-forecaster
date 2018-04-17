import React, { Component } from 'react';
import queryString from 'query-string';
import { Link } from 'react-router-dom';
import api from '../utils/api';


const WeatherGrid = (props) => {

  return (

    <ul className='grid'>
    
      {props.forecast.list.map((data, index) => {
        var someDate = new Date();
        var numberOfDaysToAdd = index;
        someDate.setDate(someDate.getDate() + numberOfDaysToAdd);
        var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        var todayString = someDate.toLocaleDateString("en-US", options);
        const imgUri = `../../images/weather-icons/${data.weather[0].icon}.svg`;
        data.date = todayString;
      
        return(
          <Link to={{
                      pathname:'/details',
                      state: {
                        selectedWeather: data,
                        city: props.forecast.city.name
                      }
                    }}>
            <li 
              key={data.dt}
              onClick={
              props.onSelect.bind(null, data)
              
                
              }
            >
              <img src= {imgUri}/>
              <div>{todayString}</div>
            </li>
        </Link>
        )
      })}
    </ul>

  )
}

class Forecast extends Component {
  constructor(props) {
    super(props)

    this.state = {
      currentWeather: null,
      forecastData: null,
      error: null,
      loading: null,
      selectedWeather: null
    }
    this.updateForecast = this.updateForecast.bind(this);


  }

  componentDidMount() {
    const city = queryString.parse(this.props.location.search)
    api.fetchWeather([
        city.city
      ])
      .then(data => {
        if (data === null) {
          return this.setState(() => {
            return {
              error: 'Looks like there was an error. Check that the city is spelled correctly',
              loading: false
            };
          });
        }
        this.setState(() => {
          return {
            error: null,
            forecastData: data,
            loading: false
          };
        });
      })
      .then(api.fetchCurrentWeather([
          city.city
        ])
        .then(weatherData => {
          this.setState((currentState) => {
            return {
              error: currentState.error,
              forecastData: currentState.forecastData,
              loading: currentState.loading,
              currentWeather: weatherData
            }
          })
        })
      )
  }

  updateForecast(data) {
    this.setState(() => {
      return {
        selectedWeather: data
      };
    });
  }


  render() {
    const error = this.state.error;
    const forecastData = this.state.forecastData;
    const loading = this.state.loading;
    const currentWeather = this.state.currentWeather;
    console.log(this.state.forecastData)


    return (
      <div>
      {!this.state.forecastData 
      ? <div>Loading</div> 
      : <WeatherGrid 
          forecast={forecastData}
          onSelect={this.updateForecast}
        />
      }
    </div>
    )
  }
}

export default Forecast;
