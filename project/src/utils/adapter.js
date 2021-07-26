import { nanoid } from 'nanoid';

const adaptObjectProperty = (object, oldProperty, newProperty) => {
  if (object && Object.prototype.hasOwnProperty.call(object, oldProperty) && newProperty) {
    object[newProperty] = object[oldProperty];
    delete object[oldProperty];
  }
};

const adaptGoodsFromServer = (goods) => (
  goods.map((item) => ({
    id: nanoid(),
    data: item,
  }))
);

const adaptOfferFromServer = (offerFromServer) => {
  if (offerFromServer) {
    const adaptedOffer = { ...offerFromServer };
    const { host } = offerFromServer;

    if (offerFromServer.goods) {
      adaptedOffer.goods = adaptGoodsFromServer(offerFromServer.goods);
    }

    if (host) {
      adaptedOffer.host = {
        ...host,
        avatarUrl: host['avatar_url'],
        isPro: host['is_pro'],
      };

      delete adaptedOffer.host['avatar_url'];
      delete adaptedOffer.host['is_pro'];
    }

    adaptObjectProperty(adaptedOffer, 'is_favorite', 'isFavorite');
    adaptObjectProperty(adaptedOffer, 'is_premium', 'isPremium');
    adaptObjectProperty(adaptedOffer, 'max_adults', 'maxAdults');
    adaptObjectProperty(adaptedOffer, 'preview_image', 'previewImage');

    return adaptedOffer;
  }

  return offerFromServer;
};

const adaptOffersFromServer = (serverOffers) => serverOffers.map(adaptOfferFromServer);

const adaptAuthInfoFromServer = (authInfo) => {
  const adaptedAuthInfo = {
    ...authInfo,
    avatarUrl: authInfo['avatar_url'],
    isPro: authInfo['is_pro'],
  };

  delete adaptedAuthInfo['avatar_url'];
  delete adaptedAuthInfo['is_pro'];

  return adaptedAuthInfo;
};

const adaptReviewFromServer = (reviewFromServer) => {
  const { user } = reviewFromServer;
  const adaptedReview = {
    ...reviewFromServer,
    user: {
      ...user,
      avatarUrl: user['avatar_url'],
      isPro: user['is_pro'],
    },
  };

  delete adaptedReview.user['avatar_url'];
  delete adaptedReview.user['is_pro'];

  return adaptedReview;
};

const adaptReviewsFromServer = (serverReviews) => serverReviews.map(adaptReviewFromServer);

export {
  adaptOffersFromServer,
  adaptOfferFromServer,
  adaptAuthInfoFromServer,
  adaptReviewsFromServer
};
