import { ILogin, IRequest, IUser } from '../types/userTypes';
import config from '../utils/config';
import authHeader from '../utils/helpers/authHeader';

export const setRequest = (method = 'GET', body = {}) => {
  const request: IRequest = {
    method,
    headers: {
      ...authHeader(),
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  };
  if (method !== 'GET') request.body = JSON.stringify(body);
  return request;
};

export async function getAll() {
  return fetch(`${config.apiUrl}/users`, setRequest());
}

export async function getUser(id: string) {
  return fetch(`${config.apiUrl}/users/${id}`, setRequest());
}

export async function loginUser(user: ILogin) {
  return fetch(`${config.apiUrl}/signin`, setRequest('POST', user));
}

export async function authUser(user: IUser) {
  return fetch(`${config.apiUrl}/users`, setRequest('POST', user));
}

async function updateUser(id: string, data: IUser) {
  return fetch(`${config.apiUrl}/users/${id}`, setRequest('PUT', data));
}

async function deleteUser(id: string) {
  return fetch(`${config.apiUrl}/users/${id}`, setRequest('DELETE'));
}
