const ActionType = {
  SET_FILTER_CITY: 'app/filter/city/set',
  SET_OFFERS: 'app/offers/set',
};

const ActionCreator = {
  setFilterCity: (city) => ({
    type: ActionType.SET_FILTER_CITY,
    payload: city,
  }),
  setOffers: (offers) => ({
    type: ActionType.SET_OFFERS,
    payload: offers,
  }),
};

export { ActionType, ActionCreator };
