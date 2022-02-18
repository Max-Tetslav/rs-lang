import React from 'react';
import { useAppSelector } from '../../../utils/helpers/appHooks';
import StatsGame from '../../UI/statsGame/StatsGame';
import cl from './StatsToday.module.scss';

function StatsToday() {
  const statistics = useAppSelector((state) => {
    const today = new Date();
    const [day, month, year] = [today.getDay(), today.getMonth(), today.getFullYear()];
    return state.stats.statistics.filter(
      (game) => game.day.getDay() === day && game.day.getMonth() === month && game.day.getFullYear() === year,
    );
  });
  return (
    <div className={cl.statsTodayWrapper}>
      <StatsGame gameName="Аудиовызов" statistics={statistics} />
      <StatsGame gameName="Спринт" statistics={statistics} />
    </div>
  );
}

export default StatsToday;
