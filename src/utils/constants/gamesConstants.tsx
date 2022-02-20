import audioImg from '../../assets/images/audio.png';
import sprintImg from '../../assets/images/sprint.png';

export const GAMES = [
  {
    name: 'Спринт',
    description: 'Выберите соответсвует ли перевод предложенному слову',
    link: 'sprint',
    background: sprintImg,
  },
  {
    name: 'Аудиовызов',
    description: 'Выберите перевод услышанного слова',
    link: 'audiocall',
    background: audioImg,
  },
];

export default GAMES;

export const PAGE_NUMBER = 30;

export const WORDS_PER_PAGE = 20;

export const MAX_RIGHT_ANSWER = 4;

export const MAX_BONUS = 4;

export const MULTIPLY_BONUS = 10;

export const SERIES_OF_ANSWER = 4;

export const INCREASE_BONUS = 2;
