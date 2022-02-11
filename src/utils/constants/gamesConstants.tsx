import audioImg from '../../assets/images/audio.png';
import sprintImg from '../../assets/images/sprint.png';

export const GAMES = [
  {
    name: 'Спринт',
    description: 'Выберите соответсвует ли перевод предложенному слову',
    link: '/games/sprint',
    background: sprintImg,
  },
  {
    name: 'Аудиовызов',
    description: 'Выберите перевод услышанного слова',
    link: '/games/audiocall',
    background: audioImg,
  },
];

export default GAMES;
