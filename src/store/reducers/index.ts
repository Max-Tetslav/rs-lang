import { combineReducers } from 'redux';
import pageTitleReducer from './pageTitleReducer';

import usersReducer from './usersReducer';
import wordsReducer from './words';

const rootReducer = combineReducers({
  users: usersReducer,
  words: wordsReducer,
  title: pageTitleReducer,
});
export default rootReducer;
