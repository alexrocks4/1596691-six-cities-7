import browserHistory from '../../browser-history';
import { ActionType } from '../action';

const redirect = (_store) => (next) => (action) => {
  if (action.type === ActionType.REDIRECTED_TO_ROUTE) {
    browserHistory.push(action.payload);
  }

  return next(action);
};

export { redirect };
