import { NameSpace } from '../rootReducer';

const selectOffers = (state) => state[NameSpace.API].offers.data;
const selectOffersStatus = (state) => state[NameSpace.API].offers.status;
const selectOffersError = (state) => state[NameSpace.API].offers.error;

export {
  selectOffers,
  selectOffersStatus,
  selectOffersError
};
