import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import rootReducer from './store/reducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import App from './components/app/app';
import offers from './mocks/offers';
import reviews from './mocks/reviews';
import { getFavoriteOffers } from './utils/util';
import { createAPI } from './services/api';

// eslint-disable-next-line no-unused-vars
const api = createAPI();
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk.withExtraArgument(api))),
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App
        offers={offers}
        reviews={reviews}
        favoriteOffers={getFavoriteOffers(offers)}
      />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
