import React, { useCallback, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import Places from '../places/places';
import { City } from '../../const';
import Map from '../map/map';
import CityList from '../city-list/city-list';
import Header from '../header/header';
import { selectCity } from '../../store/app/selectors';
import { makeSelectFilteredOffersByCity } from '../../store/api/selectors';

function Main() {
  const currentCity = useSelector(selectCity);
  const selectFilteredOffersByCity = useMemo(makeSelectFilteredOffersByCity, []);
  const filteredOffersByCity = useSelector((state) => selectFilteredOffersByCity(state, currentCity));
  const [ activeOffer, setActiveOffer ] = useState(null);
  const handleCardMouseEnter = useCallback((offer) => setActiveOffer(offer), []);
  const handleLocationClick = useCallback(() => setActiveOffer(null), []);

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

export { Main };
export default Main;
