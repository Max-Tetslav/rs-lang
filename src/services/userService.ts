import { ILogin, IRequest, IUser } from '../types/userTypes';
import { IUserWord, IUserWordData, IWord } from '../types/wordTypes';
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

export async function updateUser(id: string, user: IUser) {
  return fetch(`${config.apiUrl}/users/${id}`, setRequest('PUT', user));
}

export async function deleteUser(id: string) {
  return fetch(`${config.apiUrl}/users/${id}`, setRequest('DELETE'));
}

export const getNewUserToken = async (id: string) => {
  return fetch(`${config.apiUrl}/users/${id}/tokens`, setRequest());
};

export async function getUserWords(userId: string): Promise<IUserWordData[]> {
  const request = await fetch(`${config.apiUrl}/users/${userId}/words`, setRequest());
  const response = await request.json();

  return response;
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
  const request = await fetch(`${config.apiUrl}/users/${id}/statistics`, setRequest());
  const response = await request.json();
  return response;
}

export async function updateUserStatistic(id: string, data = {}) {
  return fetch(`${config.apiUrl}/users/${id}/statistics`, setRequest('PUT', data));
}

export async function getWords(page = 0, group = 0) {
  const request = await fetch(`${config.apiUrl}/words?page=${page}&group=${group}`);
  const response = await request.json();

  return response;
}

export async function getWordById(id = '5e9f5ee35eb9e72bc21af4af') {
  return fetch(`${config.apiUrl}/words/${id}`);
}

export async function getUserHardWords(): Promise<[{ paginatedResults: IWord[] }]> {
  const authId = localStorage.getItem('userData')
    ? (JSON.parse(localStorage.getItem('userData') as string).userId as string)
    : '';
  const querryParams = '?wordsPerPage=3600&filter=%7B%22%24and%22%3A%5B%7B%22userWord.difficulty%22%3A%22hard%22%7D%5D%7D';
  const request = await fetch(`${config.apiUrl}/users/${authId}/aggregatedWords/${querryParams}`, setRequest());
  const response = await request.json();

  return response;
}

export async function isAlreadyHardUserWord(userId: string, wordId: string): Promise<void> {
  const words = await getUserWords(userId);
  const alreadyUserWordList = words.filter((item) => item.wordId === wordId);
  const isWordExist = Boolean(alreadyUserWordList.length);
  const isWordHard = Boolean(alreadyUserWordList.filter((item) => item.difficulty === 'hard').length);

  if (isWordExist && isWordHard) {
    updateUserWord(userId, wordId, { difficulty: 'easy' });
  } else if (isWordExist && !isWordHard) {
    updateUserWord(userId, wordId, { difficulty: 'hard' });
  } else {
    createUserWord(userId, wordId, { difficulty: 'hard' });
  }
}

export async function deleteHardWordInHardUnit(userId: string, wordId: string): Promise<void> {
  updateUserWord(userId, wordId, { difficulty: 'easy' });
}

export async function getUserLearnedWords(): Promise<[{ paginatedResults: IUserWord[] }]> {
  const authId = localStorage.getItem('userData')
    ? (JSON.parse(localStorage.getItem('userData') as string).userId as string)
    : '';
  const querryParams = '?wordsPerPage=3600&filter=%7B%22userWord.optional.isLearned%22%3Atrue%7D';
  const request = await fetch(`${config.apiUrl}/users/${authId}/aggregatedWords/${querryParams}`, setRequest());
  const response = await request.json();

  return response;
}

export async function isAlreadyLearnedUserWord(userId: string, wordId: string): Promise<void> {
  const userWordsDataList = await getUserWords(userId);
  const isAlreadyUserWord = Boolean(userWordsDataList.filter((item) => item.wordId === wordId).length);
  const userWordList = await getUserLearnedWords();
  const isWordLearned = Boolean(userWordList[0].paginatedResults.filter((item) => item.userWord.optional.isLearned).length);

  if (isAlreadyUserWord && isWordLearned) {
    await updateUserWord(userId, wordId, { optional: { isLearned: false } });
  } else if (isAlreadyUserWord && !isWordLearned) {
    await updateUserWord(userId, wordId, { difficulty: 'easy', optional: { isLearned: true } });
  } else {
    await createUserWord(userId, wordId, { difficulty: 'easy', optional: { isLearned: true } });
  }
}
