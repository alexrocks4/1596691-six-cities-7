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
};

const APIResourceStatus = {
  IDLE: 'idle',
  LOADING: 'loading',
  SUCCEEDED: 'succeeded',
  FAILED: 'failed',
};

const AuthorizationStatus = {
  AUTH: 'AUTH',
  NO_AUTH: 'NO_AUTH',
  UNKNOWN: 'UNKNOWN',
};

export {
  AppRoute,
  DECIMAL_RADIX,
  CityName,
  City,
  APIRoute,
  APIResourceStatus,
  AuthorizationStatus
};
