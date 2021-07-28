import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import PlaceCardList from '../place-card-list/place-card-list';
import Loading from '../loading/loading';
import { selectCity } from '../../store/app/selectors';
import { selectIsOffersLoading } from '../../store/api/selectors';
import PlaceCardMain from '../place-card-main/place-card-main';
import Sorting from '../sorting/sorting';
import { offersProp } from '../../prop-types/offers.prop';

const loadingStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  alignContent: 'center',
  justifyContent: 'center',
};

function Places({ onCardMouseEnter, onCardMouseLeave, offers }) {
  const currentCity = useSelector(selectCity);
  const isLoading = useSelector(selectIsOffersLoading);

  if (isLoading) {
    return (
      <section className="cities__places places" style={loadingStyle}>
        <h2 className="visually-hidden">Places</h2>
        <Loading></Loading>
      </section>
    );
  }

  return (
    <section className="cities__places places">
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">{offers.length} places to stay in {currentCity}</b>
      <Sorting />
      <PlaceCardList
        className="cities__places-list places__list tabs__content"
        offers={offers}
        render={(offer) => (
          <PlaceCardMain
            key={offer.id}
            offer={offer}
            onCardMouseEnter={onCardMouseEnter}
            onCardMouseLeave={onCardMouseLeave}
          />
        )}
      />
    </section>
  );
}

Places.propTypes = {
  onCardMouseEnter: PropTypes.func,
  onCardMouseLeave: PropTypes.func,
  offers: offersProp,
};

export { Places };
export default React.memo(Places);
