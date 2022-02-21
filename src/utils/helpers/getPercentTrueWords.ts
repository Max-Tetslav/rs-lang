import { IStatsGame } from '../../types/statsTypes';

interface IProps {
  games: IStatsGame[];
  nameGame: string;
}

const getPercentTrueWords = ({ games, nameGame }: IProps): number => {
  let wordsTrue = 0;
  let wordsFalse = 0;
  games.forEach((game) => {
    if (game.nameGame === nameGame) {
      wordsTrue += game.wordsTrue.length;
      wordsFalse += game.wordsFalse.length;
    }
  });
  return Math.round((wordsTrue * 100) / (wordsTrue + wordsFalse)) || 0;
};

export default getPercentTrueWords;
