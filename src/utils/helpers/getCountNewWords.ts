import { IStatsGame } from '../../types/statsTypes';
import { IWord } from '../../types/wordTypes';

interface IProps {
  games: IStatsGame[];
  nameGame: string;
}

function GetCountNewWords({ games, nameGame }: IProps): number {
  const countSet = new Set();
  const userWord: IWord[] = JSON.parse(localStorage.getItem('hardWords') as string);
  const ids: string[] = [];
  userWord.forEach((e) => ids.push(e.id));
  games.forEach((game) => {
    if (game.nameGame === nameGame) {
      game.wordsTrue.concat(game.wordsFalse).forEach((word) => {
        if (!ids.includes(word?.id as string)) {
          countSet.add(word);
        }
      });
    }
  });

  return countSet.size;
}

export default GetCountNewWords;
