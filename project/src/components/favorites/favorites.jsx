import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import FavoritesLocationsItem from '../favorites-locations-item/favorites-locations-item';
import { AppRoute } from '../../const';
import Header from '../header/header';
import { selectFavoriteOffersGroupedByCities } from '../../store/api/selectors';

function Favorites() {
  const favoriteOffers = useSelector(selectFavoriteOffersGroupedByCities);

  return (
    <div className="page">
      <Header />
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              {[...favoriteOffers].map(([cityName, offers]) => (
                <FavoritesLocationsItem
                  key={cityName}
                  cityName={cityName}
                  offers={offers}
                />),
              )}
            </ul>
          </section>
        </div>
      </main>
      <footer className="footer container">
        <Link to={AppRoute.MAIN} className="footer__logo-link">
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width={64} height={33} />
        </Link>
      </footer>
    </div>
  );
}

export { Favorites };
export default Favorites;
