import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { isAuthorized } from '../../utils/util';
import HeaderLogo from '../header-logo/header-logo';
import NavListItemsAuthorized from '../nav-list-items-authorized/nav-list-items-authorized';
import NavListItemsUnauthorized from '../nav-list-items-unauthorized/nav-list-items-unauthorized';

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
              {isUserAuthorized ? <NavListItemsAuthorized /> : <NavListItemsUnauthorized />}
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
