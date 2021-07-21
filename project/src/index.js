import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { redirect } from './store/middlewares/redirect';
import { rootReducer } from './store/rootReducer';
import App from './components/app/app';
import { createAPI } from './services/api';
import { checkAuth } from './store/api-actions';
import { notAuthorized } from './store/action';

const api = createAPI(() => store.dispatch(notAuthorized()));

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => (
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }).concat(redirect)
  ),
});

store.dispatch(checkAuth());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
