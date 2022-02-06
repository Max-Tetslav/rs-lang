export interface IUserToken {
  token: string;
}

export interface ILogin {
  email: string;
  password: string;
}

export interface IHeaders {
  [key: string]: string;
}
export interface IRequest {
  method: string;
  headers: IHeaders;
  body?: string;
}

export interface IUser {
  name: string;
  email: string;
  password: string;
}

export interface IAuth {
  message: string;
  token: string;
  refreshToken: string;
  userId: string;
  name: string;
}

export interface UserState {
  user: IAuth;
  loggedIn: boolean;
  isLoading: boolean;
}
