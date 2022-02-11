import { authUser, loginUser } from '../../services/userService';
import { ILogin, IUser } from '../../types/userTypes';
import { AppDispatch } from '../store';
import { userSlice } from '../reducers/usersReducer';

export const createUser = (user: IUser) => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(userSlice.actions.userLoading(true));
      const userAuthData = await (await authUser(user)).json();
      dispatch(userSlice.actions.userSignin(userAuthData));
    } catch (e) {
      dispatch(userSlice.actions.userLoading(false));
    }
  };
};

export const signIn = (user: ILogin, isLoading = false) => {
  return async (dispatch: AppDispatch) => {
    if (!isLoading) dispatch(userSlice.actions.userLoading(true));
    try {
      const res = await loginUser(user);
      const userAuthData = await res.json();
      dispatch(userSlice.actions.userSignin(userAuthData));
      localStorage.setItem('userData', JSON.stringify(userAuthData));
    } catch (e) {
      throw new Error(`Authentication error ${e}`);
    }
    dispatch(userSlice.actions.userLoading(false));
  };
};

export const logout = () => {
  return async (dispatch: AppDispatch) => {
    try {
      localStorage.setItem('userData', '{}');
    } catch (e) {
      throw new Error(`Logout error ${e}`);
    }
    dispatch(userSlice.actions.userLogout());
  };
};
