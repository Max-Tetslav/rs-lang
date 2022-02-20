import React from 'react';
import cl from './PreLoadingGame.module.scss';

interface IProps {
  value: number;
}

function PreLoadingGame({ value }: IProps): JSX.Element {
  return (
    <div className={cl.wordsContainer}>
      <div className={cl.container}>
        <h1 className={cl.text}>{value}</h1>
        <div className={cl.loadingContainer} />
      </div>
    </div>
  );
}

export default PreLoadingGame;
