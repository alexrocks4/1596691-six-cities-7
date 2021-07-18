import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { reviewsProp } from '../../prop-types/reviews.prop';
import { useParams } from 'react-router-dom';
import NotFound from '../not-found/not-found';
import Header from '../header/header';
import {
  selectIsOfferFetchingFailed,
  selectIsOfferLoading,
  selectIsOfferNotFound,
  selectOfferErrorStatusCode,
  selectOfferErrorStatusText
} from '../../store/api/selectors';
import { fetchNearbyOffers, fetchOffer } from '../../store/api-actions';
import { DECIMAL_RADIX } from '../../const';
import Loading from '../loading/loading';
import RoomMainContent from '../room-main-content/room-main-content';
import Error from '../error/error';

function Room({ reviews }) {
  let { id } = useParams();
  id = parseInt(id, DECIMAL_RADIX);

  const dispatch = useDispatch();
  const isOfferLoading = useSelector(selectIsOfferLoading);
  const isOfferFetchingFailed = useSelector(selectIsOfferFetchingFailed);
  const isOfferNotFound = useSelector(selectIsOfferNotFound);
  const offerErrorStatusCode = useSelector(selectOfferErrorStatusCode);
  const offerErrorStatusText = useSelector(selectOfferErrorStatusText);

  useEffect(() => {
    dispatch(fetchOffer(id));
    dispatch(fetchNearbyOffers(id));
  }, [dispatch, id]);

  if (isOfferNotFound) {
    return <NotFound statusCode={offerErrorStatusCode}/>;
  } else if (isOfferFetchingFailed) {
    return (
      <Error
        message={offerErrorStatusText}
        statusCode={offerErrorStatusCode}
      />
    );
  }

  return (
    <div className="page">
      <Header />
      <main className="page__main page__main--property">
        {isOfferLoading
          ? <Loading className="js-loading--fullscreen"/>
          : <RoomMainContent reviews={reviews} />}
      </main>
    </div>
  );
}

Room.propTypes = {
  reviews: reviewsProp,
};

export { Room };
export default Room;

