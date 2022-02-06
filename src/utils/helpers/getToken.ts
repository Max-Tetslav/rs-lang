import { IUserToken } from '../../types/userTypes';

function getToken(): IUserToken | null {
  const userFormLS: string | null = localStorage.getItem('userData');
  let user: IUserToken;
  if (userFormLS) {
    user = JSON.parse(userFormLS);
    return user;
  }
  return null;
}
export default getToken;
