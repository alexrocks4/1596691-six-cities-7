import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import HeaderLogo from '../header-logo/header-logo';
import NavListItemsAuthorized from '../nav-list-items-authorized/nav-list-items-authorized';
import NavListItemsUnauthorized from '../nav-list-items-unauthorized/nav-list-items-unauthorized';
import { selectIsUserAuthorized } from '../../store/user/selectors';

function Header({ isLogoLinkActive }) {
  const isUserAuthorized = useSelector(selectIsUserAuthorized);

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
  isLogoLinkActive: PropTypes.bool.isRequired,
};

Header.defaultProps = {
  isLogoLinkActive: false,
};


export { Header };
export default React.memo(Header);
