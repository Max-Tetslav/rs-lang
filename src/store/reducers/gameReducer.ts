import { Reducer } from 'redux';
import { StateGame } from '../../types/gameTypes';

type Action = { type: string; payload: any }; // eslint-disable-line

export const gameState: StateGame = {
  level: 0,
};

export const gameReducer: Reducer<StateGame, Action> = (state = gameState, action) => { // eslint-disable-line
  if (action.type === 'SET_GAME_LEVEL') {
    return {
      ...state,
      level: action.payload,
    };
  }

  return state;
};
