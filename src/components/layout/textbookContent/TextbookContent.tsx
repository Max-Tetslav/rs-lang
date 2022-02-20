import React, { useState, useEffect, useMemo } from 'react';
import useFetching from '../../../hooks/useFetching';
import { getUserHardWords, getWords } from '../../../services/userService';
import { IWord } from '../../../types/wordTypes';
import cl from './TextbookContent.module.scss';

import WordsList from '../wordsList/WordsList';
import LoadingWordList from '../../UI/loadingWordList/LoadingWordList';
import { useAppDispatch, useAppSelector } from '../../../utils/helpers/appHooks';
import { update } from '../../../store/reducers/words';

interface IProps {
  unitNum: number;
  page: number;
  changePage: React.Dispatch<React.SetStateAction<number>>;
  isHardUnit: boolean;
}

function TextbookContent({ unitNum, page, changePage, isHardUnit }: IProps): JSX.Element {
  const [words, setWords] = useState([] as IWord[]);
  const dispatch = useAppDispatch();
  const hardWords = useAppSelector((state) => state.words.hardWords);

  const [fetchWords, isWordsLoading, wordsError] = useFetching(async () => {
    if (isHardUnit) {
      setWords(hardWords);
    } else {
      const data = await getWords(page, unitNum);
      setWords(data);
    }
  });

  useMemo(() => {
    getUserHardWords().then((data) => dispatch(update(data[0].paginatedResults)));
  }, []);

  useEffect(() => {
    fetchWords();
  }, [unitNum, page, isHardUnit]);

  useEffect(() => {
    if (isHardUnit) {
      setTimeout(() => fetchWords(), 2000);
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
