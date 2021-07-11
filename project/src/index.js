import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { redirect } from './store/middlewares/redirect';
import { rootReducer } from './store/rootReducer';
import App from './components/app/app';
import reviews from './mocks/reviews';
import { createAPI } from './services/api';
import { fetchOffers, checkAuth } from './store/api-actions';
import { ActionCreator } from './store/action';

const api = createAPI(() => store.dispatch(ActionCreator.notAuthorized()));

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => {
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }).concat(redirect);
  },
});

store.dispatch(checkAuth());
store.dispatch(fetchOffers());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App reviews={reviews} />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
