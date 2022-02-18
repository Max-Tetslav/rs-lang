import React from 'react';
import StatsGame from '../../UI/statsGame/StatsGame';
import cl from './StatsToday.module.scss';

function StatsToday() {
  return (
    <div className={cl.statsTodayWrapper}>
      <StatsGame />
    </div>
  );
}

export default StatsToday;
