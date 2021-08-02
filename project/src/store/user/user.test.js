import { AuthorizationStatus } from '../../const';
import { ActionType } from '../action';
import user from './user';

describe('User reducer', () => {
  describe('loggedIn action', () => {
    it('should correctly update state', () => {
      const state = {
        authorizationStatus: AuthorizationStatus.UNKNOWN,
        authorizationInfo: null,
      };

      const action = {
        type: ActionType.LOGGED_IN,
        payload: { fake: true },
      };

      expect(user(state, action)).toStrictEqual({
        authorizationStatus: AuthorizationStatus.AUTH,
        authorizationInfo: { fake: true },
      });
    });
  });

  describe('loggedOut action', () => {
    it('should correctly update state', () => {
      const state = {
        authorizationStatus: AuthorizationStatus.AUTH,
        authorizationInfo: { fake: true },
      };

      const action = {
        type: ActionType.LOGGED_OUT,
      };

      expect(user(state, action)).toStrictEqual({
        authorizationStatus: AuthorizationStatus.NO_AUTH,
        authorizationInfo: null,
      });
    });
  });

  describe('notAuthorized action', () => {
    it('should correctly update state', () => {
      const state = {
        authorizationStatus: AuthorizationStatus.AUTH,
        authorizationInfo: { fake: true },
      };

      const action = {
        type: ActionType.NOT_AUTHORIZED,
      };

      expect(user(state, action)).toStrictEqual({
        authorizationStatus: AuthorizationStatus.NO_AUTH,
        authorizationInfo: null,
      });
    });
  });
});
