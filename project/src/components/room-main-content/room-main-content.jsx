import React from 'react';
import { useSelector } from 'react-redux';
import { selectOffer, selectOfferImagesLimitedByCount, selectOffersNearby } from '../../store/api/selectors';
import RoomGalleryItem from '../room-gallery-item/room-gallery-item';
import RoomMark from '../room-mark/room-mark';
import Rating from '../rating/rating';
import Reviews from '../reviews/reviews';
import Map from '../map/map';
import NearPlaces from '../near-places/near-places';
import { capitalizeFirstLetter, pluralize } from '../../utils/util';
import { updateOffer } from '../../store/action';
import BookmarkButtonRoom from '../bookmark-button-room/bookmark-button-room';

const MAX_IMAGES = 6;
const RatingConfig = {
  rating: 'property__rating',
  ratingStars: 'property__stars',
  ratingValue: 'property__rating-value',
};

function RoomMainContent() {
  const targetOffer = useSelector(selectOffer);
  const offersNearby = useSelector(selectOffersNearby);
  const images = useSelector((state) => selectOfferImagesLimitedByCount(state, MAX_IMAGES));

  return (
    <React.Fragment>
      <section className="property">
        <div className="property__gallery-container container">
          <div className="property__gallery">
            {images.map((url, index) => {
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
              <BookmarkButtonRoom offer={targetOffer} onClick={updateOffer} />
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
            <Reviews />
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
    </React.Fragment>
  );
}

export default RoomMainContent;
