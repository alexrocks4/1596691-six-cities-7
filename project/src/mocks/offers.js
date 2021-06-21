import { nanoid } from 'nanoid';

const adaptGoodsFromServer = (goods) => (
  goods.map((item) => ({
    id: nanoid(),
    data: item,
  }))
);

const adaptFromServer = (offerFromServer) => {
  const { host } = offerFromServer;
  const adaptedOffer = {
    ...offerFromServer,
    goods: adaptGoodsFromServer(offerFromServer.goods),
    host: {
      ...host,
      avatarUrl: host.avatar_url,
      isPro: host.is_pro,
    },
    isFavorite: offerFromServer.is_favorite,
    isPremium: offerFromServer.is_premium,
    maxAdults: offerFromServer.max_adults,
    previewImage: offerFromServer.preview_image,
  };

  delete adaptedOffer.host.avatar_url;
  delete adaptedOffer.host.is_pro;
  delete adaptedOffer.is_favorite;
  delete adaptedOffer.is_premium;
  delete adaptedOffer.max_adults;
  delete adaptedOffer.preview_image;

  return adaptedOffer;
};

const jsonOffers = `[
  {
    "bedrooms": 3,
    "city": {
      "location": {
        "latitude": 51.0176137242617,
        "longitude": 4.409656854206885,
        "zoom": 10
      },
      "name": "Brussels"
    },
    "description": "A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.",
    "goods": ["Heating", "Kitchen", "Cable TV", "Washing machine", "Coffee machine", "Dishwasher"],
    "host": {
      "avatar_url": "img/avatar-angelina.jpg",
      "id": 3,
      "is_pro": true,
      "name": "Angelina"
    },
    "id": 1,
    "images": ["img/apartment-01.jpg", "img/apartment-02.jpg"],
    "is_favorite": false,
    "is_premium": true,
    "location": {
      "latitude": 51.0171137242617,
      "longitude": 4.449656854206885,
      "zoom": 8
    },
    "max_adults": 4,
    "preview_image": "img/apartment-01.jpg",
    "price": 120,
    "rating": 4.8,
    "title": "Beautiful & luxurious studio at great location",
    "type": "apartment"
  },
  {
    "bedrooms": 1,
    "city": {
      "location": {
        "latitude": 52.38333,
        "longitude": 4.9,
        "zoom": 10
      },
      "name": "Amsterdam"
    },
    "description": "A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.",
    "goods": ["Kitchen", "Washing machine", "Coffee machine"],
    "host": {
      "avatar_url": "img/avatar-max.jpg",
      "id": 4,
      "is_pro": false,
      "name": "Max"
    },
    "id": 2,
    "images": ["img/apartment-01.jpg", "img/apartment-02.jpg", "img/apartment-03.jpg"],
    "is_favorite": false,
    "is_premium": false,
    "location": {
      "latitude": 52.3909553943508,
      "longitude": 4.85309666406198,
      "zoom": 8
    },
    "max_adults": 1,
    "preview_image": "img/apartment-02.jpg",
    "price": 200,
    "rating": 3.1,
    "title": "Beautiful & luxurious studio at great location",
    "type": "room"
  },
  {
    "bedrooms": 2,
    "city": {
      "location": {
        "latitude": 52.38333,
        "longitude": 4.9,
        "zoom": 10
      },
      "name": "Amsterdam"
    },
    "description": "A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.",
    "goods": ["Heating", "Kitchen", "Cable TV", "Washing machine", "Coffee machine", "Dishwasher"],
    "host": {
      "avatar_url": "img/avatar-angelina.jpg",
      "id": 3,
      "is_pro": true,
      "name": "Angelina"
    },
    "id": 3,
    "images": ["img/room.jpg", "img/apartment-02.jpg"],
    "is_favorite": true,
    "is_premium": true,
    "location": {
      "latitude": 52.369553943508,
      "longitude": 4.85309666406198,
      "zoom": 8
    },
    "max_adults": 4,
    "preview_image": "img/apartment-01.jpg",
    "price": 120,
    "rating": 4.8,
    "title": "Beautiful & luxurious studio at great location",
    "type": "apartment"
  },
  {
    "bedrooms": 3,
    "city": {
      "location": {
        "latitude": 52.38333,
        "longitude": 4.9,
        "zoom": 10
      },
      "name": "Amsterdam"
    },
    "description": "A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.",
    "goods": ["Heating", "Kitchen", "Cable TV", "Washing machine", "Coffee machine", "Dishwasher"],
    "host": {
      "avatar_url": "img/avatar-angelina.jpg",
      "id": 3,
      "is_pro": true,
      "name": "Angelina"
    },
    "id": 4,
    "images": ["img/apartment-01.jpg", "img/apartment-02.jpg"],
    "is_favorite": true,
    "is_premium": false,
    "location": {
      "latitude": 52.3909553943508,
      "longitude": 4.929309666406198,
      "zoom": 8
    },
    "max_adults": 4,
    "preview_image": "img/apartment-01.jpg",
    "price": 120,
    "rating": 4.8,
    "title": "Beautiful & luxurious studio at great location",
    "type": "apartment"
  },
  {
    "bedrooms": 3,
    "city": {
      "location": {
        "latitude": 52.38333,
        "longitude": 4.9,
        "zoom": 10
      },
      "name": "Amsterdam"
    },
    "description": "A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.",
    "goods": ["Heating", "Kitchen", "Cable TV", "Washing machine", "Coffee machine", "Dishwasher"],
    "host": {
      "avatar_url": "img/avatar-angelina.jpg",
      "id": 3,
      "is_pro": true,
      "name": "Angelina"
    },
    "id": 5,
    "images": ["img/apartment-01.jpg", "img/apartment-02.jpg"],
    "is_favorite": false,
    "is_premium": false,
    "location": {
      "latitude": 52.3809553943508,
      "longitude": 4.939309666406198,
      "zoom": 8
    },
    "max_adults": 4,
    "preview_image": "img/apartment-01.jpg",
    "price": 120,
    "rating": 4.8,
    "title": "Beautiful & luxurious studio at great location",
    "type": "apartment"
  },
  {
    "bedrooms": 3,
    "city": {
      "location": {
        "latitude": 52.38333,
        "longitude": 4.9,
        "zoom": 10
      },
      "name": "Amsterdam"
    },
    "description": "A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.",
    "goods": ["Heating", "Kitchen", "Cable TV", "Washing machine", "Coffee machine", "Dishwasher"],
    "host": {
      "avatar_url": "img/avatar-angelina.jpg",
      "id": 3,
      "is_pro": true,
      "name": "Angelina"
    },
    "id": 6,
    "images": ["img/apartment-01.jpg", "img/apartment-02.jpg"],
    "is_favorite": true,
    "is_premium": false,
    "location": {
      "latitude": 52.35514938496378,
      "longitude": 4.673877537499948,
      "zoom": 8
    },
    "max_adults": 4,
    "preview_image": "img/apartment-01.jpg",
    "price": 120,
    "rating": 2,
    "title": "Beautiful & luxurious studio at great location",
    "type": "apartment"
  }
]`;

const offers = JSON.parse(jsonOffers).map((jsonOffer) => adaptFromServer(jsonOffer));

export default offers;
