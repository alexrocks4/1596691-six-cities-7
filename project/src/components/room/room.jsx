import React, { useEffect, useMemo } from 'react';
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
import { makeSelectOfferById, selectOffersNearby } from '../../store/api/selectors';
import { fetchNearbyOffers } from '../../store/api-actions';
import { DECIMAL_RADIX } from '../../const';
import Map from '../map/map';

function Room({ reviews }) {
  const { id } = useParams();
  const selectOfferById = useMemo(makeSelectOfferById, []);
  const targetOffer = useSelector((state) => selectOfferById(state, id));
  const offersNearby = useSelector(selectOffersNearby);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchNearbyOffers(parseInt(id, DECIMAL_RADIX)));
  }, [dispatch, id]);

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
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">
              <article className="near-places__card place-card">
                <div className="near-places__image-wrapper place-card__image-wrapper">
                  <a href="#">
                    <img className="place-card__image" src="img/room.jpg" width={260} height={200} alt="Place" />
                  </a>
                </div>
                <div className="place-card__info">
                  <div className="place-card__price-wrapper">
                    <div className="place-card__price">
                      <b className="place-card__price-value">€80</b>
                      <span className="place-card__price-text">/&nbsp;night</span>
                    </div>
                    <button className="place-card__bookmark-button place-card__bookmark-button--active button" type="button">
                      <svg className="place-card__bookmark-icon" width={18} height={19}>
                        <use xlinkHref="#icon-bookmark" />
                      </svg>
                      <span className="visually-hidden">In bookmarks</span>
                    </button>
                  </div>
                  <div className="place-card__rating rating">
                    <div className="place-card__stars rating__stars">
                      <span style={{width: '80%'}} />
                      <span className="visually-hidden">Rating</span>
                    </div>
                  </div>
                  <h2 className="place-card__name">
                    <a href="#">Wood and stone place</a>
                  </h2>
                  <p className="place-card__type">Private room</p>
                </div>
              </article>
              <article className="near-places__card place-card">
                <div className="near-places__image-wrapper place-card__image-wrapper">
                  <a href="#">
                    <img className="place-card__image" src="img/apartment-02.jpg" width={260} height={200} alt="Place" />
                  </a>
                </div>
                <div className="place-card__info">
                  <div className="place-card__price-wrapper">
                    <div className="place-card__price">
                      <b className="place-card__price-value">€132</b>
                      <span className="place-card__price-text">/&nbsp;night</span>
                    </div>
                    <button className="place-card__bookmark-button button" type="button">
                      <svg className="place-card__bookmark-icon" width={18} height={19}>
                        <use xlinkHref="#icon-bookmark" />
                      </svg>
                      <span className="visually-hidden">To bookmarks</span>
                    </button>
                  </div>
                  <div className="place-card__rating rating">
                    <div className="place-card__stars rating__stars">
                      <span style={{width: '80%'}} />
                      <span className="visually-hidden">Rating</span>
                    </div>
                  </div>
                  <h2 className="place-card__name">
                    <a href="#">Canal View Prinsengracht</a>
                  </h2>
                  <p className="place-card__type">Apartment</p>
                </div>
              </article>
              <article className="near-places__card place-card">
                <div className="near-places__image-wrapper place-card__image-wrapper">
                  <a href="#">
                    <img className="place-card__image" src="img/apartment-03.jpg" width={260} height={200} alt="Place" />
                  </a>
                </div>
                <div className="place-card__info">
                  <div className="place-card__price-wrapper">
                    <div className="place-card__price">
                      <b className="place-card__price-value">€180</b>
                      <span className="place-card__price-text">/&nbsp;night</span>
                    </div>
                    <button className="place-card__bookmark-button button" type="button">
                      <svg className="place-card__bookmark-icon" width={18} height={19}>
                        <use xlinkHref="#icon-bookmark" />
                      </svg>
                      <span className="visually-hidden">To bookmarks</span>
                    </button>
                  </div>
                  <div className="place-card__rating rating">
                    <div className="place-card__stars rating__stars">
                      <span style={{width: '100%'}} />
                      <span className="visually-hidden">Rating</span>
                    </div>
                  </div>
                  <h2 className="place-card__name">
                    <a href="#">Nice, cozy, warm big bed apartment</a>
                  </h2>
                  <p className="place-card__type">Apartment</p>
                </div>
              </article>
            </div>
          </section>
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

