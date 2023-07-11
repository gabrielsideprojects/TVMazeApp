import axios from 'axios';

const tenSeconds = 10000;

export const api = axios.create({
  headers: {'content-type': 'application/json'},
  timeout: tenSeconds,
  baseURL: 'https://api.tvmaze.com/',
});
