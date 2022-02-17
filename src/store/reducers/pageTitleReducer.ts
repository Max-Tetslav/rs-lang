import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { EPageTitles, IPageTitleState } from '../../types/pageTitleTypes';

export const initialState: IPageTitleState = {
  pageTitle: EPageTitles.home,
};

const pageTitleSlice = createSlice({
  name: 'pageTitle',
  initialState,
  reducers: {
    update(state, action: PayloadAction<string>) {
      state.pageTitle = action.payload;
    },
  },
});

export const { update } = pageTitleSlice.actions;
export default pageTitleSlice.reducer;
