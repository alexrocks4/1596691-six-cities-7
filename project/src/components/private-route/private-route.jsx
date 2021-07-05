import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { AppRoute } from '../../const';
import { isAuthorized } from '../../utils/util';

function PrivateRoute({ children, path, exact, isUserAuthorized }) {
  return (
    <Route
      path={path}
      exact={exact}
    >
      {isUserAuthorized ? children : <Redirect to={AppRoute.LOGIN} />}
    </Route>
  );
}

PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
  isUserAuthorized: PropTypes.bool.isRequired,
  exact: PropTypes.bool.isRequired,
  path: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  isUserAuthorized: isAuthorized(state.authorizationStatus),
});


export {PrivateRoute};
export default connect(mapStateToProps)(PrivateRoute);
