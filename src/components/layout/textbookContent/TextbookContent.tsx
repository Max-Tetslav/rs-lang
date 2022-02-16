import React, { useState, useEffect } from 'react';
import useFetching from '../../../hooks/useFetching';
import { getUserHardWords, getWords } from '../../../services/userService';
import { IWord } from '../../../types/wordTypes';
import cl from './TextbookContent.module.scss';

import WordsList from '../wordsList/WordsList';
import LoadingWordList from '../../UI/loadingWordList/LoadingWordList';
import { useAppSelector } from '../../../utils/helpers/appHooks';

interface IProps {
  unitNum: number;
  page: number;
  changePage: React.Dispatch<React.SetStateAction<number>>;
  isHardUnit: boolean;
}

function TextbookContent({ unitNum, page, changePage, isHardUnit }: IProps): JSX.Element {
  const [words, setWords] = useState([] as IWord[]);
  const hardWords = useAppSelector((state) => state.words.hardWords);

  const [fetchWords, isWordsLoading, wordsError] = useFetching(async () => {
    if (isHardUnit) {
      const authId = localStorage.getItem('userData') ? JSON.parse(localStorage.getItem('userData') as string).userId : '';
      await getUserHardWords(authId);

      setWords(hardWords);
    } else {
      const data = await getWords(page, unitNum);

      setWords(data);
    }
  });

  useEffect(() => {
    fetchWords();

    return () => {
      localStorage.setItem('hardWords', JSON.stringify(hardWords));
    };
  }, [unitNum, page, isHardUnit]);

  useEffect(() => {
    if (isHardUnit) {
      fetchWords();
    }
  }, [hardWords]);

  return (
    <section className={cl.container}>
      {wordsError && <h1>ERROR {wordsError}</h1>}
      {isWordsLoading ? <LoadingWordList /> : <WordsList words={words} setPageNum={changePage} isHard={isHardUnit} />}
    </section>
  );
}

export default TextbookContent;
