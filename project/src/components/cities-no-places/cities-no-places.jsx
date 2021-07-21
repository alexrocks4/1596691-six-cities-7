import React from 'react';
import { useSelector } from 'react-redux';
import { selectCity } from '../../store/app/selectors';

function CitiesNoPlaces() {
  const currentCity = useSelector(selectCity);

  return (
    <React.Fragment>
      <section className="cities__no-places">
        <div className="cities__status-wrapper tabs__content">
          <b className="cities__status">No places to stay available</b>
          <p className="cities__status-description">We could not find any property available at the moment in {currentCity}</p>
        </div>
      </section>
      <div className="cities__right-section" />
    </React.Fragment>
  );
}

export default CitiesNoPlaces;
