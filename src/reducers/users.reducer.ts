import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IAuth, UserState } from '../types/userTypes';

export const initialState: UserState = {
  user: {
    message: '',
    token: '',
    refreshToken: '',
    userId: '',
    name: '',
  },
  loggedIn: false,
  isLoading: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    userSignin(state, action: PayloadAction<IAuth>) {
      state.user = action.payload;
      state.loggedIn = !!action.payload.token;
    },
    userLoading(state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload ?? false;
    },
    userLogout(state) {
      state = initialState;
    },
  },
});

export default userSlice.reducer;