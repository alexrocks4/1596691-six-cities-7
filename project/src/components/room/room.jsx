import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
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
import { fetchNearbyOffers, fetchOffer, fetchReviews } from '../../store/api-actions';
import { DECIMAL_RADIX } from '../../const';
import Loading from '../loading/loading';
import RoomMainContent from '../room-main-content/room-main-content';
import Error from '../error/error';

function Room() {
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
    dispatch(fetchReviews(id));
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
          : <RoomMainContent />}
      </main>
    </div>
  );
}

export { Room };
export default Room;

