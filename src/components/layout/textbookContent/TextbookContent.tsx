import React, { useState, useEffect } from 'react';
import useFetching from '../../../hooks/useFetching';
import { getWords } from '../../../services/userService';
import { IWord } from '../../../types/wordTypes';
import cl from './TextbookContent.module.scss';

import PageButton from '../../UI/pageNumButton/PageNumButton';
import WordsList from '../wordsList/WordsList';

interface IProps {
  unitNum: number;
}

function TextbookContent({ unitNum }: IProps): JSX.Element {
  const [pageNum, setPageNum] = useState(0);
  const [words, setWords] = useState([] as IWord[]);
  const [fetchWords, isWordsLoading, wordsError] = useFetching(async () => {
    const data = await getWords(pageNum, unitNum);

    setWords(data);
  });

  useEffect(() => {
    fetchWords();
  }, [unitNum]);

  return (
    <section className={cl.container}>
      <div className={cl.wordsContainer}>
        {wordsError && <h1>ERROR {wordsError}</h1>}
        {isWordsLoading ? <h1>Загрузка</h1> : <WordsList words={words} />}
      </div>
      <div>
        <PageButton />
        <PageButton />
        <PageButton />
        <PageButton />
        <PageButton />
      </div>
    </section>
  );
}

export default TextbookContent;
