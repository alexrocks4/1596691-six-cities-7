import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import PlaceCardList from '../place-card-list/place-card-list';
import { offersProp } from '../../prop-types/offers.prop';
import { APIResourceStatus } from '../../const';
import Loading from '../loading/loading';

const loadingStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  alignContent: 'center',
  justifyContent: 'center',
};


function Places(props) {
  const { offers, currentCity, onCardMouseEnter, isLoading } = props;

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
      <form className="places__sorting" action="#" method="get">
        <span className="places__sorting-caption">Sort by</span>
        <span className="places__sorting-type" tabIndex={0}>
          Popular
          <svg className="places__sorting-arrow" width={7} height={4}>
            <use xlinkHref="#icon-arrow-select" />
          </svg>
        </span>
        <ul className="places__options places__options--custom places__options--opened">
          <li className="places__option places__option--active" tabIndex={0}>Popular</li>
          <li className="places__option" tabIndex={0}>Price: low to high</li>
          <li className="places__option" tabIndex={0}>Price: high to low</li>
          <li className="places__option" tabIndex={0}>Top rated first</li>
        </ul>
      </form>
      <div className="cities__places-list places__list tabs__content">
        <PlaceCardList
          offers={offers}
          onCardMouseEnter={onCardMouseEnter}
        />
      </div>
    </section>
  );
}

Places.propTypes = {
  offers: offersProp,
  currentCity: PropTypes.string.isRequired,
  onCardMouseEnter: PropTypes.func,
  isLoading: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  currentCity: state.city,
  isLoading: state.offers.status === APIResourceStatus.LOADING || state.offers.status === APIResourceStatus.IDLE,
});

export { Places };
export default connect(mapStateToProps)(Places);
