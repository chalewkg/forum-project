import axios from "axios";

const axiosBase = axios.create({
  baseURL: "http://localhost:5500/api",
  // baseURL: 'https://economic-apricot-wire.glitch.me'

  // baseURL: "http://evngadiforum.com:5500/api",
});

export default axiosBase;
