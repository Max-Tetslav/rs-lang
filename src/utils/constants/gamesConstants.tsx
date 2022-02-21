import audioSvg from '../../assets/svg/sound.svg';
import sprintSvg from '../../assets/svg/sprint.svg';

export const GAMES = [
  {
    name: 'Спринт',
    description: 'Выберите соответсвует ли перевод предложенному слову',
    link: 'sprint',
    background: sprintSvg,
  },
  {
    name: 'Аудиовызов',
    description: 'Выберите перевод услышанного слова',
    link: 'audiocall',
    background: audioSvg,
  },
];

export default GAMES;

export const PAGE_NUMBER = 30;

export const WORDS_PER_PAGE = 20;

export const MAX_RIGHT_ANSWER = 4;

export const MAX_BONUS = 8;

export const MULTIPLY_BONUS = 10;

export const SERIES_OF_ANSWER = 4;

export const INCREASE_BONUS = 2;
