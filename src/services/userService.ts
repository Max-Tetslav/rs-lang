import { ILogin, IRequest, IUser } from '../types/userTypes';
import config from '../utils/config';
import authHeader from '../utils/helpers/auth-header';

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

export async function updateUser(id: string, user: IUser) {
  return fetch(`${config.apiUrl}/users/${id}`, setRequest('PUT', user));
}

export async function deleteUser(id: string) {
  return fetch(`${config.apiUrl}/users/${id}`, setRequest('DELETE'));
}

export const getNewUserToken = async (id: string) => {
  return fetch(`${config.apiUrl}/users/${id}/tokens`, setRequest());
};

export async function getUserWords(id: string) {
  return fetch(`${config.apiUrl}/users/${id}/words`, setRequest());
}

export async function createUserWord(id: string, wordId: string, word = {}) {
  return fetch(`${config.apiUrl}/users/${id}/words/${wordId}`, setRequest('POST', word));
}

export async function getUserWord(id: string, wordId: string) {
  return fetch(`${config.apiUrl}/users/${id}/words/${wordId}`, setRequest());
}

export async function updateUserWord(id: string, wordId: string, data = {}) {
  return fetch(`${config.apiUrl}/users/${id}/words/${wordId}`, setRequest('PUT', data));
}

export async function deleteUserWord(id: string, wordId: string) {
  return fetch(`${config.apiUrl}/users/${id}/words/${wordId}`, setRequest('DELETE'));
}

export async function getUserStatistic(id: string) {
  return fetch(`${config.apiUrl}/users/${id}/statistics`, setRequest());
}

export async function updateUserStatistic(id: string, data = {}) {
  return fetch(`${config.apiUrl}/users/${id}/statistics`, setRequest('PUT', data));
}

export async function getWords(page = 0, group = 0) {
  return fetch(`${config.apiUrl}/words?page=${page}&group=${group}`);
}

export async function getWordById(id = '5e9f5ee35eb9e72bc21af4af') {
  return fetch(`${config.apiUrl}/words/${id}`);
}