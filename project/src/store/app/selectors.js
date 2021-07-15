import { NameSpace } from '../rootReducer';

const selectCity = (state) => state[NameSpace.APP].city;
const selectSortingType = (state) => state[NameSpace.APP].sortingType;

export {
  selectCity,
  selectSortingType
};
