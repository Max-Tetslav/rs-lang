import React from 'react';
import StatsToday from '../../components/layout/statsToday/StatsToday';
import cl from './Stats.module.scss';

function Stats(): JSX.Element {
  return (
    <main className={cl.container}>
      <div className={cl.wrapper}>
        <h2 className={cl.title}>Статистика за день</h2>
        <StatsToday />
      </div>
    </main>
  );
}

export default Stats;
