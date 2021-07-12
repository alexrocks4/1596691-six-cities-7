import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { CityName } from '../../const';
import { getClassName } from '../../utils/util';
import { cityUpdated } from '../../store/action';
import { selectCity } from '../../store/app/selectors';

function CityList({ onLocationClick }) {
  const currentCity = useSelector(selectCity);
  const dispatch = useDispatch();

  const handleLocationClick = (evt, cityName) => {
    evt.preventDefault();
    dispatch(cityUpdated(cityName));
    onLocationClick();
  };

  return (
    <ul className="locations__list tabs__list">
      {Object.values(CityName).map((cityName) => (
        <li key={cityName} className="locations__item">
          <a
            className={`locations__item-link tabs__item \
              ${getClassName(cityName.toLowerCase() === currentCity.toLowerCase(), 'tabs__item--active')}`}
            href="#"
            onClick={(evt) => handleLocationClick(evt, cityName)}
          >
            <span>{cityName}</span>
          </a>
        </li>
      ))}
    </ul>
  );
}

CityList.propTypes = {
  onLocationClick: PropTypes.func,
};

export { CityList };
export default CityList;
