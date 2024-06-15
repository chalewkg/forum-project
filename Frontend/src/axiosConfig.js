import axios from 'axios';

const axiosBase = axios.create({
  // baseURL: 'http://localhost:5500/api'
  // baseURL: 'https://economic-apricot-wire.glitch.me'

  baseURL: "http://3.140.186.242:5500/api",
});

export default axiosBase;