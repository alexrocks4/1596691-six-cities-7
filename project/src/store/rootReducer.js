import { combineReducers } from 'redux';
import app from './app/app';
import api from './api/api';
import user from './user/user';

const NameSpace = {
  APP: 'app',
  API: 'api',
  USER: 'user',
};

const rootReducer = combineReducers({
  [NameSpace.APP]: app,
  [NameSpace.API]: api,
  [NameSpace.USER]: user,
});

export {
  rootReducer,
  NameSpace
};
