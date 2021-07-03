import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { CityName } from '../../const';
import { getClassName } from '../../utils/util';
import { ActionCreator } from '../../store/action';

function CityList({ currentCity, updateCurrentCity, onLocationClick }) {
  const handleLocationClick = (evt, cityName) => {
    evt.preventDefault();
    updateCurrentCity(cityName);
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
  currentCity: PropTypes.string.isRequired,
  updateCurrentCity: PropTypes.func.isRequired,
  onLocationClick: PropTypes.func,
};

const mapStateToProps = (state) => ({
  currentCity: state.city,
});

const mapDispatchToProps = (dispatch) => ({
  updateCurrentCity(value) {
    dispatch(ActionCreator.cityUpdated(value));
  },
});

export { CityList };
export default connect(mapStateToProps, mapDispatchToProps)(CityList);
