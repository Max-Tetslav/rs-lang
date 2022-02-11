import { IUserToken } from '../../types/userTypes';

function getToken(): string | null {
  const userFormLS: string | null = localStorage.getItem('userData');
  let user: IUserToken;

  if (userFormLS) {
    user = JSON.parse(userFormLS);
    return user.token;
  }

  return null;
}

export default getToken;
