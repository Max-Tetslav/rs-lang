import React from 'react';
import cl from './StatsGame.module.scss';

function StatsGame() {
  return (
    <div className={cl.container}>
      <div className={cl.wrapper}>
        <h3 className={cl.title}>Аудиовызов</h3>
        <div className={cl.textContainer}>
          <p className={cl.textItem}>Количество новых слов:</p>
          <p className={cl.textItem}>0</p>
        </div>
        <div className={cl.textContainer}>
          <p className={cl.textItem}>Процент правильных ответов:</p>
          <p className={cl.textItem}>0</p>
        </div>
        <div className={cl.textContainer}>
          <p className={cl.textItem}>Самая длинная серия правильных ответов:</p>
          <p className={cl.textItem}>0</p>
        </div>
      </div>
    </div>
  );
}

export default StatsGame;
