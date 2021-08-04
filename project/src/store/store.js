import { configureStore } from '@reduxjs/toolkit';
import { createAPI } from '../services/api';
import { notAuthorized } from './action';
import { redirect } from './middlewares/redirect';
import { rootReducer } from './rootReducer';

const getStore = (initialState, reducer = rootReducer) => {
  const api = createAPI(() => store.dispatch(notAuthorized()));

  const options = {
    reducer,
    middleware: (getDefaultMiddleware) => (
      getDefaultMiddleware({
        thunk: {
          extraArgument: api,
        },
      }).concat(redirect)
    ),
  };

  if (initialState) {
    options.preloadedState = initialState;
  }

  const store = configureStore(options);

  return store;
};

export { getStore };
