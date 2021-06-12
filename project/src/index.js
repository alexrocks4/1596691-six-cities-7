import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import offers from './mocks/offers';
import reviews from './mocks/reviews';
import { getFavoriteOffers } from './utils/util';

ReactDOM.render(
  <React.StrictMode>
    <App
      offers={offers}
      reviews={reviews}
      favoriteOffers={getFavoriteOffers(offers)}
    />
  </React.StrictMode>,
  document.getElementById('root'));
