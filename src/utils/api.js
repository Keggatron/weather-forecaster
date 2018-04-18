import axios from 'axios';

const API_KEY = 'b714ec74bbab5650795063cb0fdf5fbe'
const ROOT_URL = `https://api.openweathermap.org/data/2.5/`;

const api = {
  fetchWeather(city) {
    const url = `${ROOT_URL}forecast/daily?q=${city}&type=accurate&APPID=${API_KEY}&cnt=5`;
    return axios.get(url)
      .then(request => {
        return request.data;
      });
  },

  fetchCurrentWeather(city) {
    const url = `${ROOT_URL}weather?appid=${API_KEY}&q=${city}`;

    return axios.get(url)
      .then(request => {
        return request.data;
      });
  }
}

export default api
