import axios from 'axios';
import { HttpCode, BACKEND_URL } from '../const';

const REQUEST_TIMEOUT = 5000;

const onSuccess = (response) => response;

const onFail = (cb, err) => {
  const {response} = err;

  if (response && response.status === HttpCode.UNAUTHORIZED) {
    cb();
  }

  return Promise.reject(err);
};

export const createAPI = (onUnauthorized) => {
  const token = localStorage.getItem('token') ?? '';

  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: REQUEST_TIMEOUT,
    headers: {
      'x-token': token,
    },
  });

  api.interceptors.response.use(onSuccess, onFail.bind(null, onUnauthorized));

  return api;
};
