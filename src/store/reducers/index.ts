import { combineReducers } from 'redux';
import gameReducer from './gameReducer';
import pageTitleReducer from './pageTitleReducer';
import usersReducer from './usersReducer';
import wordsReducer from './wordsReducer';

const rootReducer = combineReducers({
  users: usersReducer,
  words: wordsReducer,
  games: gameReducer,
  title: pageTitleReducer,
});

export default rootReducer;
