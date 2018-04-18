import React, { Component } from 'react';

const Details = (props) => {
  const selectedWeatherData = props.location.state;
  const imgUri = `../../images/weather-icons/${selectedWeatherData.selectedWeather.weather[0].icon}.svg`;

  return (
    <div className='details-container'>
      <img src={imgUri} />
      <p>{selectedWeatherData.selectedWeather.date}</p>
      <p>{selectedWeatherData.city}</p>
      <p>{selectedWeatherData.selectedWeather.weather[0].main}</p>
      <p>Low Temperature: {Math.round(selectedWeatherData.selectedWeather.temp.min - 273)} degrees C</p>
      <p>High Temperature: {Math.round(selectedWeatherData.selectedWeather.temp.max -273)} degrees C</p>
      <p>Humidity: {Math.round(selectedWeatherData.selectedWeather.humidity)}</p>
    </div>
  )

}

export default Details;
