import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { CityName } from '../../const';
import { getClassName } from '../../utils/util';
import { ActionCreator } from '../../store/action';

function CityList({ filterCity, setFilterCity }) {
  const handleLocationClick = (evt, cityName) => {
    evt.preventDefault();
    setFilterCity(cityName);
  };

  return (
    <ul className="locations__list tabs__list">
      {Object.values(CityName).map((cityName) => (
        <li key={cityName} className="locations__item">
          <a
            className={`locations__item-link tabs__item \
              ${getClassName(cityName.toLowerCase() === filterCity.toLowerCase(), 'tabs__item--active')}`}
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
  filterCity: PropTypes.string.isRequired,
  setFilterCity: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  filterCity: state.filterCity,
});

const mapDispatchToProps = (dispatch) => ({
  setFilterCity(value) {
    dispatch(ActionCreator.setFilterCity(value));
  },
});

export { CityList };
export default connect(mapStateToProps, mapDispatchToProps)(CityList);
