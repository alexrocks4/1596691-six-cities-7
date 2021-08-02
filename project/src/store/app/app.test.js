import { ActionType } from '../action';
import app from './app';

describe('App reducer', () => {
  describe('cityUpdated action', () => {
    it('should correctly update state', () => {
      const state = {
        city: 'Paris',
      };

      const action = {
        type: ActionType.CITY_UPDATED,
        payload: 'London',
      };

      expect(app(state, action)).toStrictEqual({
        city: 'London',
      });
    });
  });

  describe('sortingTypeUpdated action', () => {
    it('should correctly update state', () => {
      const state = {
        sortingType: 'popular',
      };

      const action = {
        type: ActionType.SORTING_TYPE_UPDATED,
        payload: 'top-rated',
      };

      expect(app(state, action)).toStrictEqual({
        sortingType: 'top-rated',
      });
    });
  });
});
