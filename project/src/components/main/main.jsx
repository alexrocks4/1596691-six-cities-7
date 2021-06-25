import React, { useMemo, useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import PlaceCardList from '../place-card-list/place-card-list';
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
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{filteredOffersByCity.length} places to stay in {currentCity}</b>
              <form className="places__sorting" action="#" method="get">
                <span className="places__sorting-caption">Sort by</span>
                <span className="places__sorting-type" tabIndex={0}>
                  Popular
                  <svg className="places__sorting-arrow" width={7} height={4}>
                    <use xlinkHref="#icon-arrow-select" />
                  </svg>
                </span>
                <ul className="places__options places__options--custom places__options--opened">
                  <li className="places__option places__option--active" tabIndex={0}>Popular</li>
                  <li className="places__option" tabIndex={0}>Price: low to high</li>
                  <li className="places__option" tabIndex={0}>Price: high to low</li>
                  <li className="places__option" tabIndex={0}>Top rated first</li>
                </ul>
              </form>
              <div className="cities__places-list places__list tabs__content">
                <PlaceCardList
                  offers={filteredOffersByCity}
                  onCardMouseEnter={handleCardMouseEnter}
                />
              </div>
            </section>
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
});

export { Main };
export default connect(mapStateToProps)(Main);
