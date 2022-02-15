import { combineReducers } from 'redux';

import usersReducer from './usersReducer';
import wordsReducer from './words';

const rootReducer = combineReducers({
  users: usersReducer,
  words: wordsReducer,
});
export default rootReducer;
