export const TOKEN = 'fake-token';

export const authInfo = {
  'avatar_url': 'img/1.png',
  email: 'fake@fake.com',
  id: 1,
  'is_pro': false,
  name: 'John',
  token: TOKEN,
};

export const offer = {
  bedrooms: 3,
  city: {
    location: {
      latitude: 52.370216,
      longitude: 4.895168,
      zoom: 10,
    },
    name: 'Paris',
  },
  description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
  goods: [
    'Heating',
    'Kitchen',
    'Cable TV',
    'Washing machine',
    'Coffee machine',
    'Dishwasher',
  ],
  host: {
    'avatar_url': 'img/avatar-angelina.jpg',
    id: 3,
    'is_pro': true,
    name: 'Angelina',
  },
  id: 1,
  images: [
    'img/apartment-01.jpg',
    'img/apartment-02.jpg',
  ],
  'is_favorite': false,
  'is_premium': false,
  location: {
    latitude: 52.35514938496378,
    longitude: 4.673877537499948,
    zoom: 8,
  },
  'max_adults': 4,
  'preview_image': 'img/apartment-01.jpg',
  price: 120,
  rating: 4.8,
  title: 'Beautiful & luxurious studio at great location',
  type: 'apartment',
};

export const offers = [offer];
