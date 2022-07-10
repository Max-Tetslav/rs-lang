import { PAGE_NUMBER } from '../constants/gamesConstants';

function getRandomPageNum() {
  return Math.floor(Math.random() * PAGE_NUMBER);
}

export default getRandomPageNum;
