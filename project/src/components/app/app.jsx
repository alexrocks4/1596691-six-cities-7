import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import Main from '../main/main';
import SignIn from '../sign-in/sign-in';
import Favorites from '../favorites/favorites';
import Room from '../room/room';
import NotFound from '../not-found/not-found';
import { AppRoute } from '../../const';

function App(props) {
  const { offersCount } = props;

  return (
    <Router>
      <Switch>
        <Route path={AppRoute.MAIN} exact>
          <Main offersCount={offersCount}/>
        </Route>
        <Route path={AppRoute.LOGIN} exact>
          <SignIn></SignIn>
        </Route>
        <Route path={AppRoute.FAVORITES} exact>
          <Favorites></Favorites>
        </Route>
        <Route path={AppRoute.ROOM} exact>
          <Room></Room>
        </Route>
        <Route>
          <NotFound></NotFound>
        </Route>
      </Switch>
    </Router>
  );
}

App.propTypes = {
  offersCount: PropTypes.number,
};

export default App;
