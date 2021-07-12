import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { AppRoute } from '../../const';
import { selectIsUserAuthorized } from '../../store/user/selectors';

function PrivateRoute(props) {
  const {
    children,
    path,
    exact,
    unauthorizedContent,
  } = props;

  const isUserAuthorized = useSelector(selectIsUserAuthorized);

  return (
    <Route
      path={path}
      exact={exact}
    >
      {isUserAuthorized ? children : unauthorizedContent }
    </Route>
  );
}

PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
  exact: PropTypes.bool.isRequired,
  path: PropTypes.string.isRequired,
  unauthorizedContent: PropTypes.node.isRequired,
};

PrivateRoute.defaultProps = {
  unauthorizedContent: <Redirect to={AppRoute.LOGIN} />,
};

export {PrivateRoute};
export default PrivateRoute;
