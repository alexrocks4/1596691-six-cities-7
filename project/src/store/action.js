const ActionType = {
  CITY_UPDATED: 'app/cityUpdated',
  OFFERS_LOADED: 'app/offersLoaded',
};

const ActionCreator = {
  cityUpdated: (city) => ({
    type: ActionType.CITY_UPDATED,
    payload: city,
  }),
  offersLoaded: (offers) => ({
    type: ActionType.OFFERS_UPDATED,
    payload: offers,
  }),
};

export { ActionType, ActionCreator };
