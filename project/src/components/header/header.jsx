import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { isAuthorized } from '../../utils/util';
import HeaderLogo from '../header-logo/header-logo';
import { AppRoute } from '../../const';

function Header({ isUserAuthorized, isLogoLinkActive }) {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <HeaderLogo className={isLogoLinkActive ? 'header__logo-link--active' : ''}></HeaderLogo>
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
  );
}

Header.propTypes = {
  isUserAuthorized: PropTypes.bool.isRequired,
  isLogoLinkActive: PropTypes.bool.isRequired,
};

Header.defaultProps = {
  isLogoLinkActive: false,
};

const mapStateToProps = (state) => ({
  isUserAuthorized: isAuthorized(state.authorizationStatus),
});

export { Header };
export default connect(mapStateToProps)(Header);
