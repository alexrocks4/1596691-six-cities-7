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
        "latitude": 52.370216,
        "longitude": 4.895168,
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
    "id": 1,
    "images": ["img/apartment-01.jpg", "img/apartment-02.jpg"],
    "is_favorite": false,
    "is_premium": false,
    "location": {
      "latitude": 52.35514938496378,
      "longitude": 4.673877537499948,
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
        "latitude": 48.89304651480916,
        "longitude": 2.351692301078516,
        "zoom": 10
      },
      "name": "Paris"
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
      "latitude": 48.89304651480156,
      "longitude": 2.351692301078316,
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
        "latitude": 52.370216,
        "longitude": 4.895168,
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
    "is_premium": false,
    "location": {
      "latitude": 52.35514938496178,
      "longitude": 4.673877537499048,
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
        "latitude": 50.850402336283125,
        "longitude": 4.35169908818879,
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
    "id": 4,
    "images": ["img/apartment-01.jpg", "img/apartment-02.jpg"],
    "is_favorite": true,
    "is_premium": false,
    "location": {
      "latitude": 50.850402336285125,
      "longitude": 4.35169908818179,
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
        "latitude": 51.00905939985244,
        "longitude": 6.983108900484334,
        "zoom": 10
      },
      "name": "Cologne"
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
      "latitude": 51.00905939981244,
      "longitude": 6.983108900464334,
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
        "latitude": 52.370216,
        "longitude": 4.895168,
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
