import { useEffect, useState } from 'react';
import { getUserStatistic, updateUserStatistic } from '../../services/userService';
import { addStats } from '../../store/reducers/statsReduser';
import { IStatsGame } from '../../types/statsTypes';
import { IWord } from '../../types/wordTypes';
import { useAppDispatch, useAppSelector } from './appHooks';

interface IProps {
  wrongAnswers: (IWord | null)[];
  rightAnswers: (IWord | null)[];
  seriesWords: number;
}

function UpdateStatistics({ wrongAnswers, rightAnswers, seriesWords }: IProps) {
  const dispatch = useAppDispatch();
  const id = useAppSelector((state) => state.users.user.userId);
  const today = new Date();
  const [day, month, year] = [today.getDay(), today.getMonth(), today.getFullYear()];

  const stats = {
    learnedWords: 0,
    optional: {
      audiocall: {
        newWords: 0,
        day: today.getDay(),
        month: today.getMonth(),
        year: today.getFullYear(),
        wordsTrue: rightAnswers.length,
        wordsFalse: wrongAnswers.length,
        seriesTrueAnswers: seriesWords,
      },
      sprint: {
        newWords: 0,
        day: today.getDay(),
        month: today.getMonth(),
        year: today.getFullYear(),
        wordsTrue: rightAnswers.length,
        wordsFalse: wrongAnswers.length,
        seriesTrueAnswers: seriesWords,
      },
    },
  };

  const statistics: IStatsGame = {
    userID: id,
    nameGame: useAppSelector((state) => state.title.pageTitle),
    day: day,
    month: month,
    year: year,
    wordsTrue: rightAnswers.length,
    wordsFalse: wrongAnswers.length,
    seriesTrueAnswers: seriesWords,
  };

  dispatch(addStats(statistics));

  //   const stats = {
  //     learnedWords: 0,
  //     optional: { stat: JSON.stringify(statist) },
  //   };

  setTimeout(() => {
    updateUserStatistic(id, stats);
  }, 1000);
}

export default UpdateStatistics;
