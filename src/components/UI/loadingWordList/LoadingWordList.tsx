import React from 'react';
import cl from './LoadingWordList.module.scss';

function LoadingWordList(): JSX.Element {
  return (
    <div className={cl.wordsContainer}>
      <div className={cl.container}>
        <h1 className={cl.text}>Загрузка</h1>
        <div className={cl.loadingContainer} />
      </div>
    </div>
  );
}

export default LoadingWordList;
