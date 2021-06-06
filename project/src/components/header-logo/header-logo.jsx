import React from 'react';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import PropTypes from 'prop-types';

function HeaderLogo({ className = '' }) {
  return (
    <Link to={AppRoute.MAIN} className={`header__logo-link ${className}`}>
      <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width={81} height={41} />
    </Link>
  );
}

HeaderLogo.propTypes = {
  className: PropTypes.string,
};

export default HeaderLogo;
