import React from 'react';
import { useAppSelector } from '../../../utils/helpers/appHooks';
import StatsGame from '../../UI/statsGame/StatsGame';
import cl from './StatsToday.module.scss';

function StatsToday() {
  const id = useAppSelector((state) => state.users.user.userId);
  const statistics = useAppSelector((state) => {
    const today = new Date();
    const [day, month, year] = [today.getDay(), today.getMonth(), today.getFullYear()];
    return state.stats.optional.filter(
      (game) => game.day === day && game.month === month && game.year === year && game.userID === id,
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
