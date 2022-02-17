import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { StateGame } from '../../types/gameTypes';

export const initialState: StateGame = {
  level: 0,
};

const gameSlice = createSlice({
  name: 'levelGame',
  initialState,
  reducers: {
    updateLevel(state, action: PayloadAction<number>) {
      state.level = action.payload;
    },
  },
});

export const { updateLevel } = gameSlice.actions;
export default gameSlice.reducer;
