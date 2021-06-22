import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './store/reducer';
import App from './components/app/app';
import offers from './mocks/offers';
import reviews from './mocks/reviews';
import { getFavoriteOffers } from './utils/util';

const store = createStore(rootReducer);

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
