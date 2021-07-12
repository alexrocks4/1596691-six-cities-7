import browserHistory from '../../browser-history';
import { redirectedToRoute } from '../action';

const redirect = (_store) => (next) => (action) => {
  if (action.type === redirectedToRoute.toString()) {
    browserHistory.push(action.payload);
  }

  return next(action);
};

export { redirect };
