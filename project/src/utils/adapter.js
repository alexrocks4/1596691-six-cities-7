import { nanoid } from 'nanoid';

const adaptGoodsFromServer = (goods) => (
  goods.map((item) => ({
    id: nanoid(),
    data: item,
  }))
);

const adaptOfferFromServer = (offerFromServer) => {
  const { host } = offerFromServer;
  const adaptedOffer = {
    ...offerFromServer,
    goods: adaptGoodsFromServer(offerFromServer.goods),
    host: {
      ...host,
      avatarUrl: host['avatar_url'],
      isPro: host['is_pro'],
    },
    isFavorite: offerFromServer['is_favorite'],
    isPremium: offerFromServer['is_premium'],
    maxAdults: offerFromServer['max_adults'],
    previewImage: offerFromServer['preview_image'],
  };

  delete adaptedOffer.host['avatar_url'];
  delete adaptedOffer.host['is_pro'];
  delete adaptedOffer['is_favorite'];
  delete adaptedOffer['is_premium'];
  delete adaptedOffer['max_adults'];
  delete adaptedOffer['preview_image'];

  return adaptedOffer;
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
  const { user, date } = reviewFromServer;
  const adaptedReview = {
    ...reviewFromServer,
    date: new Date(date),
    user: {
      ...user,
      avatarUrl: user.avatar_url,
      isPro: user.is_pro,
    },
  };

  delete adaptedReview.user.avatar_url;
  delete adaptedReview.user.is_pro;

  return adaptedReview;
};

const adaptReviewsFromServer = (serverReviews) => serverReviews.map(adaptReviewFromServer);

export {
  adaptOffersFromServer,
  adaptOfferFromServer,
  adaptAuthInfoFromServer,
  adaptReviewsFromServer
};
