import React, { Component } from 'react';

const Details = (props) => {
  const selectedWeatherData = props.location.state;
  const imgUri = `../../images/weather-icons/${selectedWeatherData.selectedWeather.weather[0].icon}.svg`;

  return (
    <div>
      <img src={imgUri} />
      <div>{selectedWeatherData.selectedWeather.date}</div>
      <div>{selectedWeatherData.city}</div>
      <div>{selectedWeatherData.selectedWeather.weather[0].main}</div>
      <div>Low Temperature: {Math.round(selectedWeatherData.selectedWeather.temp.min - 273)} degrees C</div>
      <div>High Temperature: {Math.round(selectedWeatherData.selectedWeather.temp.max -273)} degress C</div>
      <div>Humidity: {Math.round(selectedWeatherData.selectedWeather.humidity)}</div>
    </div>
  )

}

export default Details;
