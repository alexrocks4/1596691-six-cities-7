import { NameSpace } from '../rootReducer';

const selectCity = (state) => state[NameSpace.APP].city;

export { selectCity };
