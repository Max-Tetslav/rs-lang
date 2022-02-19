import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { StateGame } from '../../types/gameTypes';

export const initialState: StateGame = {
  level: 0,
  page: 0,
  isGameStart: false,
};

const gameSlice = createSlice({
  name: 'levelGame',
  initialState,
  reducers: {
    updateLevel(state, action: PayloadAction<number>) {
      state.level = action.payload;
    },
    updatePage(state, action: PayloadAction<number>) {
      state.page = action.payload;
    },
    setIsGameStart(state, action: PayloadAction<boolean>) {
      state.isGameStart = action.payload;
    },
  },
});

export const { updateLevel, updatePage, setIsGameStart } = gameSlice.actions;
export default gameSlice.reducer;
