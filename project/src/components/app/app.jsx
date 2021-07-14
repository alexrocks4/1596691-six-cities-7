import React from 'react';
import { Router, Switch, Route, Redirect } from 'react-router-dom';
import browserHistory from '../../browser-history';
import Main from '../main/main';
import SignIn from '../sign-in/sign-in';
import Favorites from '../favorites/favorites';
import Room from '../room/room';
import NotFound from '../not-found/not-found';
import { AppRoute } from '../../const';
import { reviewsProp } from '../../prop-types/reviews.prop';
import PrivateRoute from '../private-route/private-route';
import ScrollToTop from '../scroll-to-top/scroll-to-top';

function App(props) {
  const { reviews } = props;

  return (
    <Router history={browserHistory}>
      <ScrollToTop />
      <Switch>
        <Route path={AppRoute.MAIN} exact>
          <Main />
        </Route>
        <PrivateRoute
          path={AppRoute.LOGIN}
          exact
          unauthorizedContent={<SignIn />}
        >
          <Redirect to={AppRoute.MAIN} />
        </PrivateRoute>
        <PrivateRoute path={AppRoute.FAVORITES} exact>
          <Favorites />
        </PrivateRoute>
        <Route path={AppRoute.ROOM} exact>
          <Room reviews={reviews} />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
}

App.propTypes = {
  reviews: reviewsProp,
};

export default App;
