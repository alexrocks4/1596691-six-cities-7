import React, { useCallback, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import CityList from '../city-list/city-list';
import Header from '../header/header';
import { selectCity } from '../../store/app/selectors';
import { makeSelectFilteredOffersByCity, makeSelectSortedOffers } from '../../store/api/selectors';
import CitiesPlaces from '../cities-places/cities-places';

function Main() {
  const selectFilteredOffersByCity = useMemo(makeSelectFilteredOffersByCity, []);
  const selectSortedOffers = useMemo(makeSelectSortedOffers, []);
  const currentCity = useSelector(selectCity);
  const filteredOffersByCity = useSelector((state) => selectFilteredOffersByCity(state, currentCity));
  const sortedOffers = useSelector((state) => selectSortedOffers(state, filteredOffersByCity));

  const [ activeOffer, setActiveOffer ] = useState(null);
  const handlePlacesCardMouseEnter = useCallback((offer) => setActiveOffer(offer), []);
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
            <CitiesPlaces
              offers={sortedOffers}
              currentCity={currentCity}
              activeOffer={activeOffer}
              onPlacesCardMouseEnter={handlePlacesCardMouseEnter}
            />
          </div>
        </div>
      </main>
    </div>
  );
}

export { Main };
export default Main;
