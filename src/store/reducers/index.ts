import { combineReducers } from 'redux';
import { gameReducer } from './gameReducer';

import usersReducer from './usersReducer';

const rootReducer = combineReducers({ users: usersReducer, games: gameReducer });
export default rootReducer;
