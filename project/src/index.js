import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import rootReducer from './store/reducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import App from './components/app/app';
import reviews from './mocks/reviews';
import { createAPI } from './services/api';
import { fetchOffers, checkAuth } from './store/api-actions';
import { ActionCreator } from './store/action';

const api = createAPI(() => store.dispatch(ActionCreator.notAuthorized()));

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk.withExtraArgument(api))),
);

store.dispatch(checkAuth());
store.dispatch(fetchOffers());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App reviews={reviews} />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
