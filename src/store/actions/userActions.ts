import { authUser, loginUser } from '../../services/userService';
import { ILogin, IUser } from '../../types/userTypes';
import { AppDispatch } from '../store';
import { userSignin, userLoading, userLogout } from '../reducers/usersReducer';

export const signIn = (user: ILogin, isLoading = false) => {
  return async (dispatch: AppDispatch) => {
    if (!isLoading) dispatch(userLoading(true));
    try {
      const res = await loginUser(user);
      const userAuthData = await res.json();
      dispatch(userSignin(userAuthData));
      localStorage.setItem('userData', JSON.stringify(userAuthData));
    } catch (e) {
      throw new Error(`Authentication error ${e}`);
    }
    dispatch(userLoading(false));
  };
};

export const createUser = (user: IUser) => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(userLoading(true));
      await authUser(user);
      dispatch(signIn({ email: user.email, password: user.password }, true));
    } catch (e) {
      dispatch(userLoading(false));
    }
  };
};

export const logout = () => {
  return async (dispatch: AppDispatch) => {
    try {
      localStorage.setItem('userData', '{}');
    } catch (e) {
      throw new Error(`Logout error ${e}`);
    }
    dispatch(userLogout());
  };
};
