import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IStatsGame, StatsState } from '../../types/statsTypes';

export const initialState: StatsState = {
  learnedWords: 0,
  optional: JSON.parse(localStorage.getItem('statistics') as string) || [],
};

const statsSlice = createSlice({
  name: 'stats',
  initialState,
  reducers: {
    addStats: (state, action: PayloadAction<IStatsGame>) => {
      state.optional.push(action.payload);
    },
  },
});

export const { addStats } = statsSlice.actions;
export default statsSlice.reducer;
