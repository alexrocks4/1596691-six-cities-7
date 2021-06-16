import React from 'react';
import { Link } from 'react-router-dom';
import HeaderLogo from '../header-logo/header-logo';
import favoriteOffersProp from '../../prop-types/favoriteOffers.prop';
import FavoritesLocationsItem from '../favorites-locations-item/favorites-locations-item';
import { AppRoute } from '../../const';

function Favorites({ favoriteOffers }) {
  return (
    <div className="page">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <HeaderLogo></HeaderLogo>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <Link
                    to={AppRoute.FAVORITES}
                    className="header__nav-link header__nav-link--profile"
                  >
                    <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                  </Link>
                </li>
                <li className="header__nav-item">
                  <Link
                    to={AppRoute.LOGIN}
                    className="header__nav-link"
                  >
                    <span className="header__signout">Sign out</span>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              {Object.entries(favoriteOffers)
                .map(([cityName, offers]) => (
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

Favorites.propTypes = {
  favoriteOffers: favoriteOffersProp,
};

export default Favorites;
