import axios from 'axios';
import { HttpCode } from '../const';

const BACKEND_URL = 'https://7.react.pages.academy/six-cities';
const REQUEST_TIMEOUT = 5000;

const onSuccess = (response) => response;

const onFail = (cb, err) => {
  const {response} = err;

  if (response.status === HttpCode.UNAUTHORIZED) {
    cb();
  }

  return Promise.reject({
    data: response.data,
    status: response.status,
    statusText: response.statusText,
  });
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
