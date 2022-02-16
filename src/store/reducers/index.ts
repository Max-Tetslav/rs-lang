import { combineReducers } from 'redux';
import { gameReducer } from './gameReducer';

import usersReducer from './usersReducer';
import wordsReducer from './words';

const rootReducer = combineReducers({
  users: usersReducer,
  words: wordsReducer,
  games: gameReducer,
});
export default rootReducer;
