import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IStatsGame, StatsState } from '../../types/statsTypes';

export const initialState: StatsState = {
  learnedWords: 0,
  statistics: JSON.parse(localStorage.getItem('statistics') as string) || [],
  optional: [],
};

const statsSlice = createSlice({
  name: 'stats',
  initialState,
  reducers: {
    addStats: (state, action: PayloadAction<IStatsGame>) => {
      state.statistics.push(action.payload);
    },
  },
});

export const { addStats } = statsSlice.actions;
export default statsSlice.reducer;
