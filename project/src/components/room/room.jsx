import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { reviewsProp } from '../../prop-types/reviews.prop';
import { useParams } from 'react-router-dom';
import NotFound from '../not-found/not-found';
import RoomGalleryItem from '../room-gallery-item/room-gallery-item';
import RoomMark from '../room-mark/room-mark';
import Rating from '../rating/rating';
import { capitalizeFirstLetter, pluralize } from '../../utils/util';
import Header from '../header/header';
import Reviews from '../reviews/reviews';
import {
  selectOffer,
  selectOffersNearby,
  selectIsOfferLoading
} from '../../store/api/selectors';
import { fetchNearbyOffers, fetchOffer } from '../../store/api-actions';
import { DECIMAL_RADIX } from '../../const';
import Map from '../map/map';
import NearPlaces from '../near-places/near-places';

function Room({ reviews }) {
  let { id } = useParams();
  id = parseInt(id, DECIMAL_RADIX);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchOffer(id));
    dispatch(fetchNearbyOffers(id));
  }, [dispatch, id]);

  const targetOffer = useSelector(selectOffer);
  const offersNearby = useSelector(selectOffersNearby);

  if (!targetOffer) {
    return <NotFound />;
  }

  const RatingConfig = {
    className: {
      rating: 'property__rating',
      ratingStars: 'property__stars',
      ratingValue: 'property__rating-value',
    },
  };

  return (
    <div className="page">
      <Header />
      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {targetOffer.images.map((url, index) => {
                const keyId = `${index}-${url}`;
                return <RoomGalleryItem key={keyId} imageSrc={url} />;
              })}
            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              {targetOffer.isPremium && <RoomMark />}
              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {targetOffer.title}
                </h1>
                <button className={`property__bookmark-button ${targetOffer.isFavorite ? 'property__bookmark-button--active' : ''} button`} type="button">
                  <svg className="property__bookmark-icon" width={31} height={33}>
                    <use xlinkHref="#icon-bookmark" />
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <Rating
                rating={targetOffer.rating}
                isRatingValueVisible
                config={RatingConfig}
              />
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {capitalizeFirstLetter(targetOffer.type)}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {targetOffer.bedrooms} {`Bedroom${pluralize(targetOffer.bedrooms)}`}
                </li>
                <li className="property__feature property__feature--adults">
                  Max {targetOffer.maxAdults} {`adult${pluralize(targetOffer.maxAdults)}`}
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">€{targetOffer.price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">
                  {targetOffer.goods.map(({id: goodId, data: good}) => (
                    <li
                      className="property__inside-item"
                      key={goodId}
                    >
                      {good}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                    <img className="property__avatar user__avatar" src={targetOffer.host.avatarUrl} width={74} height={74} alt="Host avatar" />
                  </div>
                  <span className="property__user-name">
                    {targetOffer.host.name}
                  </span>
                  {targetOffer.host.isPro && (
                    <span className="property__user-status">
                      Pro
                    </span>
                  )}
                </div>
                <div className="property__description">
                  <p className="property__text">
                    {targetOffer.description}
                  </p>
                </div>
              </div>
              <Reviews reviews={reviews} />
            </div>
          </div>
          <section className="property__map map">
            <Map
              city={targetOffer.city}
              points={offersNearby}
              selectedPoint={targetOffer}
            />
          </section>
        </section>
        <div className="container">
          <NearPlaces offers={offersNearby} />
        </div>
      </main>
    </div>
  );
}

Room.propTypes = {
  reviews: reviewsProp,
};

export { Room };
export default Room;

