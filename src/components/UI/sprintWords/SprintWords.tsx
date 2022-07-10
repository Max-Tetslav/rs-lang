import React from 'react';
import cl from './SprintWords.module.scss';

interface IProps {
  wordEn: string | undefined;
  wordRu: string;
}

function SprintWords({ wordEn, wordRu }: IProps): JSX.Element {
  return (
    <div className={cl.container}>
      <h4 className={[cl.word, cl.word_en].join(' ')}>{wordEn}</h4>
      <h6 className={[cl.word, cl.word_ru].join(' ')}>{wordRu}</h6>
    </div>
  );
}

export default SprintWords;
