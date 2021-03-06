import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Main from '../main/main';
import SignIn from '../sign-in/sign-in';
import Favorites from '../favorites/favorites';
import Room from '../room/room';
import NotFound from '../not-found/not-found';
import { AppRoute } from '../../const';
import PrivateRoute from '../private-route/private-route';
import ScrollToTop from '../scroll-to-top/scroll-to-top';

function App() {
  return (
    <>
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
          <Room />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </>
  );
}

export default App;
