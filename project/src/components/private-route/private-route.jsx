import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { AppRoute } from '../../const';
import { isAuthorized } from '../../utils/util';

function PrivateRoute(props) {
  const {
    children,
    path,
    exact,
    isUserAuthorized,
    unauthorizedContent,
  } = props;

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
  isUserAuthorized: PropTypes.bool.isRequired,
  exact: PropTypes.bool.isRequired,
  path: PropTypes.string.isRequired,
  unauthorizedContent: PropTypes.node.isRequired,
};

PrivateRoute.defaultProps = {
  unauthorizedContent: <Redirect to={AppRoute.LOGIN} />,
};

const mapStateToProps = (state) => ({
  isUserAuthorized: isAuthorized(state.authorizationStatus),
});


export {PrivateRoute};
export default connect(mapStateToProps)(PrivateRoute);
