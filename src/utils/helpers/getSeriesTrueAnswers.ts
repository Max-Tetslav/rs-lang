import { IStatsGame } from '../../types/statsTypes';

interface IProps {
  games: IStatsGame[];
  nameGame: string;
}

const getSeriesTrueAnswers = ({ games, nameGame }: IProps): number => {
  let series = 0;
  games.forEach((game) => {
    if (game.seriesTrueAnswers > series && game.nameGame === nameGame) series = game.seriesTrueAnswers;
  });
  return series;
};

export default getSeriesTrueAnswers;
