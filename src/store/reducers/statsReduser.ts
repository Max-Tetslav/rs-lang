import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getUserStatistic } from '../../services/userService';
import { IStatsGame, StatsState } from '../../types/statsTypes';
import { useAppSelector } from '../../utils/helpers/appHooks';

export const initialState: StatsState = {
  learnedWords: 0,
  statistics: JSON.parse(localStorage.getItem('statistics') as string) || [],
  // optional: {},
};

const initStatsState = () => {
  const id = useAppSelector((state) => state.users.user.userId);
  const storageData = getUserStatistic(id);
  if (id) {
    storageData.then((e) => {
      return {
        audiocall: {
          newWords: e.audiocall.newWords,
          day: e.audiocall.day,
          month: e.audiocall.month,
          year: e.audiocall.year,
          wordsTrue: e.audiocall.wordsTrue,
          wordsFalse: e.audiocall.wordsFalse,
          seriesTrueAnswers: e.audiocall.seriesTrueAnswers,
        },
        sprint: {
          newWords: e.sprint.newWords,
          day: e.sprint.day,
          month: e.sprint.month,
          year: e.sprint.year,
          wordsTrue: e.sprint.wordsTrue,
          wordsFalse: e.sprint.wordsFalse,
          seriesTrueAnswers: e.sprint.seriesTrueAnswers,
        },
      };
    });
    return 
  }
  // return initState;
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
