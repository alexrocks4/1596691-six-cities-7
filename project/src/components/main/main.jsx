import React, { useMemo, useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Places from '../places/places';
import HeaderLogo from '../header-logo/header-logo';
import { offersProp } from '../../prop-types/offers.prop';
import { AppRoute, City } from '../../const';
import Map from '../map/map';
import { filterOffersByCity } from '../../utils/util';
import CityList from '../city-list/city-list';

function Main(props) {
  const { offers, currentCity } = props;
  const filteredOffersByCity = useMemo(() => filterOffersByCity(offers, currentCity), [offers, currentCity]);
  const [ activeOffer, setActiveOffer ] = useState(null);
  const handleCardMouseEnter = (offer) => setActiveOffer(offer);
  const handleLocationClick = () => setActiveOffer(null);

  return (
    <div className="page page--gray page--main">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <HeaderLogo className="header__logo-link--active"></HeaderLogo>
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
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <CityList onLocationClick={handleLocationClick} />
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <Places
              offers={filteredOffersByCity}
              currentCity={currentCity}
              onCardMouseEnter={handleCardMouseEnter}
            >
            </Places>
            <div className="cities__right-section">
              <section className="cities__map map">
                <Map
                  city={City[currentCity]}
                  points={filteredOffersByCity}
                  selectedPoint={activeOffer}
                />
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

Main.propTypes = {
  offers: offersProp,
  currentCity: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  currentCity: state.city,
  offers: state.offers.data,
});

export { Main };
export default connect(mapStateToProps)(Main);
