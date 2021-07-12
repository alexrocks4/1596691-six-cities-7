import { createSelector } from '@reduxjs/toolkit';
import { NameSpace } from '../rootReducer';
import { AuthorizationStatus } from '../../const';

const selectAuthorizationStatus = (state) => state[NameSpace.USER].authorizationStatus;
const selectUserEmail = (state) => state[NameSpace.USER].authorizationInfo?.email;
const selectIsUserAuthorized = createSelector(
  selectAuthorizationStatus,
  (authorizationStatus) => authorizationStatus === AuthorizationStatus.AUTH,
);

export {
  selectAuthorizationStatus,
  selectUserEmail,
  selectIsUserAuthorized
};
