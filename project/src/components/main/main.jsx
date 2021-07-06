import React, { useMemo, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Places from '../places/places';
import { offersProp } from '../../prop-types/offers.prop';
import { City } from '../../const';
import Map from '../map/map';
import { filterOffersByCity } from '../../utils/util';
import CityList from '../city-list/city-list';
import { Header } from '../header/header';

function Main(props) {
  const { offers, currentCity } = props;
  const filteredOffersByCity = useMemo(() => filterOffersByCity(offers, currentCity), [offers, currentCity]);
  const [ activeOffer, setActiveOffer ] = useState(null);
  const handleCardMouseEnter = (offer) => setActiveOffer(offer);
  const handleLocationClick = () => setActiveOffer(null);

  return (
    <div className="page page--gray page--main">
      <Header isLogoLinkActive />
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
