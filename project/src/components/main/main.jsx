import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CityList from '../city-list/city-list';
import Header from '../header/header';
import { selectCity } from '../../store/app/selectors';
import { makeSelectFilteredOffersByCity, makeSelectSortedOffers, selectIsOffersLoaded, selectIsServerUnreachable } from '../../store/api/selectors';
import CitiesPlaces from '../cities-places/cities-places';
import CitiesNoPlaces from '../cities-no-places/cities-no-places';
import classNames from 'classnames';
import { fetchOffers } from '../../store/api-actions';
import { offersCleared, serverStatusUpdated } from '../../store/action';
import { ServerStatus } from '../../const';
import { onAPINoResponse } from '../../utils/util';
import ErrorServerUnreachable from '../error-server-unreachable/error-server-unreachable';

function Main() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchOffers())
      .catch(onAPINoResponse.bind(null, () => dispatch(serverStatusUpdated(ServerStatus.UNREACHABLE))));

    return () => {
      dispatch(offersCleared());
      dispatch(serverStatusUpdated(ServerStatus.IDLE));
    };
  }, [dispatch]);

  const isServerUnreachable = useSelector(selectIsServerUnreachable);
  const selectFilteredOffersByCity = useMemo(makeSelectFilteredOffersByCity, []);
  const selectSortedOffers = useMemo(makeSelectSortedOffers, []);
  const currentCity = useSelector(selectCity);
  const filteredOffersByCity = useSelector((state) => selectFilteredOffersByCity(state, currentCity));
  const sortedOffers = useSelector((state) => selectSortedOffers(state, filteredOffersByCity));
  const isOffersLoaded = useSelector(selectIsOffersLoaded);
  const isNoOffers = !sortedOffers.length && isOffersLoaded;

  const [ activeOffer, setActiveOffer ] = useState(null);
  const handlePlacesCardMouseEnter = useCallback((offer) => setActiveOffer(offer), []);
  const handleLocationClick = useCallback(() => setActiveOffer(null), []);

  let placesContent;

  if (isServerUnreachable) {
    placesContent = <ErrorServerUnreachable />;
  } else if (isNoOffers) {
    placesContent = <CitiesNoPlaces />;
  }
  else {
    placesContent = (
      <CitiesPlaces
        offers={sortedOffers}
        currentCity={currentCity}
        activeOffer={activeOffer}
        onPlacesCardMouseEnter={handlePlacesCardMouseEnter}
      />
    );
  }

  return (
    <div className="page page--gray page--main">
      <Header isLogoLinkActive />
      <main className={classNames(
        'page__main page__main--index',
        { 'page__main--index-empty': isNoOffers || isServerUnreachable},
      )}
      >
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <CityList onLocationClick={handleLocationClick} />
          </section>
        </div>
        <div className="cities">
          <div className={classNames(
            'cities__places-container container',
            { 'cities__places-container--empty': isNoOffers || isServerUnreachable},
          )}
          >
            {placesContent}
          </div>
        </div>
      </main>
    </div>
  );
}

export { Main };
export default Main;
