const ActionType = {
  CITY_UPDATED: 'app/cityUpdated',
  OFFERS_FETCHING_STARTED: 'api/offers/fetchingStarted',
  OFFERS_LOADED: 'api/offers/loaded',
};

const ActionCreator = {
  cityUpdated: (city) => ({
    type: ActionType.CITY_UPDATED,
    payload: city,
  }),
  offersFetchingStarted: () => ({
    type: ActionType.OFFERS_FETCHING_STARTED,
  }),
  offersLoaded: (offers) => ({
    type: ActionType.OFFERS_LOADED,
    payload: offers,
  }),
};

export { ActionType, ActionCreator };
