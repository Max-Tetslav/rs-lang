import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IHardWordsState, IWord } from '../../types/wordTypes';

export const initialState: IHardWordsState = {
  hardWords: [],
};

const wordsSlice = createSlice({
  name: 'words',
  initialState,
  reducers: {
    add(state, action: PayloadAction<IWord>) {
      state.hardWords.push(action.payload);
    },
    remove(state, action: PayloadAction<string>) {
      state.hardWords = state.hardWords.filter((item) => item.id !== action.payload);
    },
    update(state, action: PayloadAction<IWord[]>) {
      state.hardWords = action.payload;
    },
  },
});

export const { add, remove, update } = wordsSlice.actions;
export default wordsSlice.reducer;
