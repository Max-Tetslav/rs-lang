import { combineReducers } from 'redux';
import gameReducer from './gameReducer';
import pageTitleReducer from './pageTitleReducer';
import statsReduser from './statsReduser';

import usersReducer from './usersReducer';
import wordsReducer from './words';

const rootReducer = combineReducers({
  users: usersReducer,
  words: wordsReducer,
  games: gameReducer,
  title: pageTitleReducer,
  stats: statsReduser,
});
export default rootReducer;
