import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { loggedOut } from '../../store/action';
import { selectUserEmail } from '../../store/user/selectors';

function NavListItemsAuthorized() {
  const dispatch = useDispatch();
  const userEmail = useSelector(selectUserEmail);
  const handleLogoutClick = (evt) => {
    evt.preventDefault();
    dispatch(loggedOut());
  };

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
        <a
          href={AppRoute.LOGIN}
          className="header__nav-link"
          onClick={handleLogoutClick}
        >
          <span className="header__signout">Sign out</span>
        </a>
      </li>
    </React.Fragment>
  );
}

export { NavListItemsAuthorized };
export default NavListItemsAuthorized;
