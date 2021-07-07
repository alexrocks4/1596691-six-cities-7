import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { AppRoute } from '../../const';

function NavListItemsAuthorized({ userEmail }) {
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

NavListItemsAuthorized.propTypes = {
  userEmail: PropTypes.string.isRequired,
};

const mapStateToProps = ({ authorizationInfo }) => ({
  userEmail: authorizationInfo.email,
});

export { NavListItemsAuthorized };
export default connect(mapStateToProps)(NavListItemsAuthorized);
