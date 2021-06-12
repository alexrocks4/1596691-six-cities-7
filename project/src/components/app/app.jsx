import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Main from '../main/main';
import SignIn from '../sign-in/sign-in';
import Favorites from '../favorites/favorites';
import Room from '../room/room';
import NotFound from '../not-found/not-found';
import { AppRoute } from '../../const';
import { offersProp } from '../../prop-types/offers.prop';
import { reviewsProp } from '../../prop-types/reviews.prop';
import favoriteOffersProp from '../../prop-types/favoriteOffers.prop';

function App(props) {
  const { offers, reviews, favoriteOffers } = props;

  return (
    <Router>
      <Switch>
        <Route path={AppRoute.MAIN} exact>
          <Main offers={offers} />
        </Route>
        <Route path={AppRoute.LOGIN} exact>
          <SignIn />
        </Route>
        <Route path={AppRoute.FAVORITES} exact>
          <Favorites favoriteOffers={favoriteOffers} />
        </Route>
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
  offers: offersProp,
  reviews: reviewsProp,
  favoriteOffers: favoriteOffersProp,
};

export default App;
