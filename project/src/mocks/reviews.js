const adaptFromServer = (reviewFromServer) => {
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

const jsonReviews = `[
  {
    "comment": "A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.",
    "date": "2019-05-08T14:13:56.569Z",
    "id": 1,
    "rating": 4,
    "user": {
      "avatar_url": "img/avatar-max.jpg",
      "id": 4,
      "is_pro": false,
      "name": "Max"
    }
  },
  {
    "comment": "A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.",
    "date": "2019-05-09T17:13:56.569Z",
    "id": 2,
    "rating": 2,
    "user": {
      "avatar_url": "img/avatar-angelina.jpg",
      "id": 3,
      "is_pro": true,
      "name": "Angelina"
    }
  },
  {
    "comment": "A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.",
    "date": "2019-05-10T14:13:56.569Z",
    "id": 3,
    "rating": 4,
    "user": {
      "avatar_url": "img/avatar-max.jpg",
      "id": 4,
      "is_pro": false,
      "name": "Max"
    }
  }
]`;

const reviews = JSON.parse(jsonReviews).map((jsonReview) => adaptFromServer(jsonReview));

export default reviews;
