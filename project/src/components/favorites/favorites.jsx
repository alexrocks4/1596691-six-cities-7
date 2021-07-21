import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import Header from '../header/header';
import { selectFavoriteOffersGroupedByCities } from '../../store/api/selectors';
import { fetchFavoriteOffers } from '../../store/api-actions';
import classNames from 'classnames';
import FavoritesMainContent from '../favorites-main-content/favorites-main-content';

function Favorites() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFavoriteOffers());
  }, [dispatch]);

  const favoriteOffers = useSelector(selectFavoriteOffersGroupedByCities);
  const isFavoriteOffersEmpty = !favoriteOffers.length;

  return (
    <div className={classNames('page', { 'page--favorites-empty': isFavoriteOffersEmpty})}>
      <Header />
      <main className={classNames('page__main page__main--favorites', { 'page__main--favorites-empty': isFavoriteOffersEmpty})}>
        <div className="page__favorites-container container">
          <FavoritesMainContent favoriteOffers={favoriteOffers} />
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
