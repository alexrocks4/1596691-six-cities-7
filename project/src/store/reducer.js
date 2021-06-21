import { CityName } from '../const';

const initialState = {
  selectedCity: CityName.PARIS,
  offers: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default reducer;
