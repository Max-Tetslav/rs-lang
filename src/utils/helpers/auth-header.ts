import { IUserToken } from '../../types/userTypes';
import getToken from './getToken';

function authHeader() {
  const user: IUserToken | null = getToken();

  if (user && user.token) {
    return { Authorization: `Bearer ${user.token}` };
  }
  return { Authorization: '' };
}

export default authHeader;
