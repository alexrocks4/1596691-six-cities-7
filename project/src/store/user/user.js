import { createReducer } from '@reduxjs/toolkit';
import { AuthorizationStatus } from '../../const';
import { loggedIn, loggedOut, notAuthorized } from '../action';

const initialState = {
  authorizationStatus: AuthorizationStatus.UNKNOWN,
  authorizationInfo: null,
};

const user = createReducer(initialState, (builder) => {
  builder
    .addCase(loggedIn, (state, action) => {
      state.authorizationStatus = AuthorizationStatus.AUTH;
      state.authorizationInfo = action.payload;
    })
    .addCase(loggedOut, (state) => {
      state.authorizationStatus = AuthorizationStatus.NO_AUTH;
      state.authorizationInfo = null;
    })
    .addCase(notAuthorized, (state) => {
      state.authorizationStatus = AuthorizationStatus.NO_AUTH;
      state.authorizationInfo = null;
    });
});

export default user;
