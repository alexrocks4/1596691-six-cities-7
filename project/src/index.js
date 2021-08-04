import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/app/app';
import { checkAuth } from './store/api-actions';
import browserHistory from './browser-history';
import { Router } from 'react-router-dom';
import { getStore } from './store/store';

const store = getStore();

store.dispatch(checkAuth());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router history={browserHistory}>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
