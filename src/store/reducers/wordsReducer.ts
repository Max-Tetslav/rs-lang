import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IWordsState, IWord, TCommonUserWord } from '../../types/wordTypes';

export const initialState: IWordsState = {
  hardWords: [],
  learnedWords: [],
};

const wordsSlice = createSlice({
  name: 'words',
  initialState,
  reducers: {
    addHardWord(state, action: PayloadAction<IWord>) {
      state.hardWords.push(action.payload);
    },
    removeHardWord(state, action: PayloadAction<string>) {
      state.hardWords = state.hardWords.filter((item) => item.id !== action.payload);
    },
    updateHardWords(state, action: PayloadAction<IWord[]>) {
      state.hardWords = action.payload;
    },
    addLearnedWord(state, action: PayloadAction<TCommonUserWord>) {
      state.learnedWords.push(action.payload);
    },
    removeLearnedWord(state, action: PayloadAction<string>) {
      state.learnedWords = state.learnedWords.filter((item) => item._id !== action.payload);
    },
    updateLearnedWords(state, action: PayloadAction<TCommonUserWord[]>) {
      state.learnedWords = action.payload;
    },
  },
});

export const { addHardWord, removeHardWord, updateHardWords, updateLearnedWords, removeLearnedWord, addLearnedWord } =
  wordsSlice.actions;
export default wordsSlice.reducer;
