import { authUser, getNewUserToken, getUser, loginUser } from '../../services/userService';
import { ILogin, IUser, UserState } from '../../types/userTypes';
import { AppDispatch } from '../store';
import { userSignin, userLoading, userLogout, userUpdate } from '../reducers/usersReducer';

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
      localStorage.setItem('userData', '');
    } catch (e) {
      throw new Error(`Logout error ${e}`);
    }
    dispatch(userLogout());
  };
};

export const checkToken = () => {
  return async (dispatch: AppDispatch) => {
    const userId = localStorage.getItem('userData') ? JSON.parse(localStorage.getItem('userData') as string).userId : '';
    const tryRequest = await getUser(userId);
    if (tryRequest.status === 401) {
      const newToken = await getNewUserToken(userId);
      if (newToken.status === 403) {
        dispatch(userLogout());
        return false;
      }
      if (newToken.ok) {
        const newUserToken = await newToken.json();
        const userData = localStorage.getItem('userData') ? JSON.parse(localStorage.getItem('userData') as string) : '';
        const newUser = {
          message: userData.message,
          token: newUserToken.token,
          refreshToken: newUserToken.refreshToken,
          userId: userData.userId,
          name: userData.name,
        };
        localStorage.setItem('userData', JSON.stringify(newUser));
        const newUserState: UserState = {
          user: newUser,
          loggedIn: true,
          isLoading: false,
        };
        dispatch(userUpdate(newUserState));
        return true;
      }
    }
    return true;
  };
};
