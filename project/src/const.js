const AppRoute = {
  MAIN: '/',
  LOGIN: '/login',
  FAVORITES: '/favorites',
  ROOM: '/offer/:id',
  ROOM_BASE: '/offer',
};

const DECIMAL_RADIX = 10;

const CityName = {
  PARIS: 'Paris',
  COLOGNE: 'Cologne',
  BRUSSELS: 'Brussels',
  AMSTERDAM: 'Amsterdam',
  HAMBURG: 'Hamburg',
  DUSSELDORF: 'Dusseldorf',
};

const City = {
  [CityName.PARIS]: {
    location: {
      latitude: 48.91865943472081,
      longitude: 2.364911022098602,
      zoom: 10,
    },
  },
  [CityName.COLOGNE]: {
    location: {
      latitude: 51.01640342408285,
      longitude: 6.957703016537305,
      zoom: 10,
    },
  },
  [CityName.BRUSSELS]: {
    location: {
      latitude: 51.0176137242617,
      longitude: 4.409656854206885,
      zoom: 10,
    },
  },
  [CityName.AMSTERDAM]: {
    location: {
      latitude: 52.46626939413032,
      longitude: 4.929364745842074,
      zoom: 10,
    },
  },
  [CityName.HAMBURG]: {
    location: {
      latitude: 53.62858503695006,
      longitude: 10.01227298556854,
      zoom: 10,
    },
  },
  [CityName.DUSSELDORF]: {
    location: {
      latitude: 51.31397026645887,
      longitude: 6.823270336198558,
      zoom: 10,
    },
  },
};

const APIRoute = {
  OFFERS: '/hotels',
  LOGIN: '/login',
  LOGOUT: '/logout',
  MAIN: '/',
  FAVORITE: '/favorite',
  OFFERS_NEARBY: (id) => `/hotels/${id}/nearby`,
  OFFER: (id) => `/hotels/${id}`,
  REVIEWS: (id) => `/comments/${id}`,
  FAVORITE_STATUS: (id, status) => `/favorite/${id}/${status}`,
};

const APIResourceStatus = {
  IDLE: 'idle',
  IN_PROGRESS: 'in_propgress',
  SUCCEEDED: 'succeeded',
  FAILED: 'failed',
};

const AuthorizationStatus = {
  AUTH: 'AUTH',
  NO_AUTH: 'NO_AUTH',
  UNKNOWN: 'UNKNOWN',
};

const SortingType = {
  POPULAR: 'popular',
  PRICE_ASCENDING: 'price-ascending',
  PRICE_DESCENDING: 'price-descending',
  TOP_RATED: 'top-rated',
};

const SortingDescription = {
  [SortingType.POPULAR]: 'Popular',
  [SortingType.PRICE_ASCENDING]: 'Price: low to high',
  [SortingType.PRICE_DESCENDING]: 'Price: high to low',
  [SortingType.TOP_RATED]: 'Top rated first',
};

// For strict ordering while rendering in components
const sortingTypes = [
  SortingType.POPULAR,
  SortingType.PRICE_ASCENDING,
  SortingType.PRICE_DESCENDING,
  SortingType.TOP_RATED,
];

const HttpCode = {
  UNAUTHORIZED: 401,
  NOT_FOUND: 404,
};

const ServerStatus = {
  IDLE: 'idle',
  UNREACHABLE: 'unreachable',
};

const ErrorMessage = {
  SERVER_UNREACHABLE: 'Data fetching error. Server unreachable.',
};

export {
  AppRoute,
  DECIMAL_RADIX,
  CityName,
  City,
  APIRoute,
  APIResourceStatus,
  AuthorizationStatus,
  SortingType,
  SortingDescription,
  sortingTypes,
  HttpCode,
  ServerStatus,
  ErrorMessage
};
