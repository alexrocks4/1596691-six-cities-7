import axios from 'axios';

const BACKEND_URL = 'https://7.react.pages.academy/six-cities';
const REQUEST_TIMEOUT = 5000;

const HttpCode = {
  UNAUTHORIZED: 401,
};

const onSuccess = (response) => response;

const onFail = (cb, err) => {
  const {response} = err;

  if (response.status === HttpCode.UNAUTHORIZED) {
    cb();
  }

  throw err;
};

export const createAPI = (onUnauthorized) => {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: REQUEST_TIMEOUT,
  });

  api.interceptors.response.use(onSuccess, onFail.bind(null, onUnauthorized));

  return api;
};
