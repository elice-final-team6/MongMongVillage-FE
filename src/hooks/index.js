import axios from 'axios';

export const instance = axios.create({
  baseURL: process.env.REACT_APP_DB_API_ENDPOINT,
});

instance.interceptors.request.use(function (config) {
  const token = localStorage.getItem('token');
  config.headers.Authorization = token ? `Bearer ${token}` : '';
  return config;
});

export * from './getBestContents';
