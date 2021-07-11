import { NameSpace } from '../rootReducer';

const selectAuthorizationStatus = (state) => state[NameSpace.USER].authorizationStatus;
const selectUserEmail = (state) => state[NameSpace.USER].authorizationInfo?.email;

export {
  selectAuthorizationStatus,
  selectUserEmail
};
