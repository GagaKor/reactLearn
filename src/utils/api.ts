import axios from 'axios';

const api = axios.create({
  baseURL: process.env.NODE_ENV === 'production' ? process.env.REACT_APP_BASE_URL : 'http://localhost:8080',
  timeout: 1000 * 60,
  withCredentials: true,
});

export default api;
