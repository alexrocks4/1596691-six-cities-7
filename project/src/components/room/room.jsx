import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import NotFound from '../not-found/not-found';
import Header from '../header/header';
import {
  selectIsOfferFetchingFailed,
  selectIsOfferLoading,
  selectIsOfferNotFound,
  selectIsServerUnreachable,
  selectOfferErrorStatusCode,
  selectOfferErrorStatusText
} from '../../store/api/selectors';
import { fetchNearbyOffers, fetchOffer, fetchReviews } from '../../store/api-actions';
import { DECIMAL_RADIX, ErrorMessage, ServerStatus } from '../../const';
import Loading from '../loading/loading';
import RoomMainContent from '../room-main-content/room-main-content';
import Error from '../error/error';
import { onAPIError } from '../../utils/util';
import { serverStatusUpdated } from '../../store/action';

function Room() {
  let { id } = useParams();
  id = parseInt(id, DECIMAL_RADIX);

  const dispatch = useDispatch();
  const isServerUnreachable = useSelector(selectIsServerUnreachable);
  const isOfferLoading = useSelector(selectIsOfferLoading);
  const isOfferFetchingFailed = useSelector(selectIsOfferFetchingFailed);
  const isOfferNotFound = useSelector(selectIsOfferNotFound);
  const offerErrorStatusCode = useSelector(selectOfferErrorStatusCode);
  const offerErrorStatusText = useSelector(selectOfferErrorStatusText);

  useEffect(() => {
    dispatch(fetchOffer(id))
      .then(() => {
        dispatch(fetchNearbyOffers(id));
        dispatch(fetchReviews(id));
      })
      .catch(onAPIError.bind(null, {
        onNoResponse: () => dispatch(serverStatusUpdated(ServerStatus.UNREACHABLE)),
      }));
  }, [dispatch, id]);

  if (isServerUnreachable) {
    return <Error message={ErrorMessage.SERVER_UNREACHABLE} />;
  } else if (isOfferNotFound) {
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

