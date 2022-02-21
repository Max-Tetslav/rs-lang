import React from 'react';
import { IStatsGame } from '../../../types/statsTypes';
import { useAppSelector } from '../../../utils/helpers/appHooks';
import GetCountNewWords from '../../../utils/helpers/getCountNewWords';
import getPercentTrueWords from '../../../utils/helpers/getPercentTrueWords';
import getSeriesTrueAnswers from '../../../utils/helpers/getSeriesTrueAnswers';
import cl from './StatsGame.module.scss';

interface IProps {
  gameName: string;
  statistics: IStatsGame[];
}

function StatsGame({ gameName, statistics }: IProps) {
  const isAuth = useAppSelector((state) => state.users.loggedIn);
  return (
    <div className={cl.container}>
      <div className={cl.wrapper}>
        <h3 className={cl.title}>{gameName}</h3>
        <div className={cl.textContainer}>
          <p className={cl.textItem}>Количество новых слов:</p>
          <p className={cl.textItem}>{isAuth ? GetCountNewWords({ games: statistics, nameGame: gameName }) : 0}</p>
        </div>
        <div className={cl.textContainer}>
          <p className={cl.textItem}>Процент правильных ответов:</p>
          <p className={cl.textItem}>{isAuth ? getPercentTrueWords({ games: statistics, nameGame: gameName }) : 0}</p>
        </div>
        <div className={cl.textContainer}>
          <p className={cl.textItem}>Самая длинная серия правильных ответов:</p>
          <p className={cl.textItem}>{isAuth ? getSeriesTrueAnswers({ games: statistics, nameGame: gameName }) : 0}</p>
        </div>
      </div>
    </div>
  );
}

export default StatsGame;
