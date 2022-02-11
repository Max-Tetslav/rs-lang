import getToken from './getToken';

function authHeader() {
  const token: string | null = getToken();

  if (token) {
    return { Authorization: `Bearer ${token}` };
  }

  return { Authorization: '' };
}

export default authHeader;
