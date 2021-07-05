import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Main from '../main/main';
import SignIn from '../sign-in/sign-in';
import Favorites from '../favorites/favorites';
import Room from '../room/room';
import NotFound from '../not-found/not-found';
import { AppRoute } from '../../const';
import { reviewsProp } from '../../prop-types/reviews.prop';
import PrivateRoute from '../private-route/private-route';

function App(props) {
  const { reviews } = props;

  return (
    <Router>
      <Switch>
        <Route path={AppRoute.MAIN} exact>
          <Main />
        </Route>
        <Route path={AppRoute.LOGIN} exact>
          <SignIn />
        </Route>
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
