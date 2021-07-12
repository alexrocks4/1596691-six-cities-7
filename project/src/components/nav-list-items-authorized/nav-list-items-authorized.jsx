import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { selectUserEmail } from '../../store/user/selectors';

function NavListItemsAuthorized() {
  const userEmail = useSelector(selectUserEmail);

  return (
    <React.Fragment>
      <li className="header__nav-item user">
        <Link
          to={AppRoute.FAVORITES}
          className="header__nav-link header__nav-link--profile"
        >
          <div className="header__avatar-wrapper user__avatar-wrapper"></div>
          <span className="header__user-name user__name">{userEmail}</span>
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
    </React.Fragment>
  );
}

export { NavListItemsAuthorized };
export default NavListItemsAuthorized;
