import React, { useState, useEffect, useMemo } from 'react';
import useFetching from '../../../hooks/useFetching';
import { getUserHardWords, getUserLearnedWords, getWords } from '../../../services/userService';
import { IWord } from '../../../types/wordTypes';
import cl from './TextbookContent.module.scss';

import WordsList from '../wordsList/WordsList';
import LoadingWordList from '../../UI/loadingWordList/LoadingWordList';
import { useAppDispatch, useAppSelector } from '../../../utils/helpers/appHooks';
import { updateHardWords, updateLearnedWords } from '../../../store/reducers/wordsReducer';

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
  const authId = localStorage.getItem('userData')
    ? (JSON.parse(localStorage.getItem('userData') as string).userId as string)
    : '';

  const [fetchWords, isWordsLoading, wordsError] = useFetching(async () => {
    if (isHardUnit) {
      setWords(hardWords);
    } else {
      const data = await getWords(page, unitNum);
      setWords(data);
    }
  });

  useMemo(() => {
    if (authId) {
      getUserHardWords().then((data) => dispatch(updateHardWords(data[0].paginatedResults)));
      getUserLearnedWords().then((data) => dispatch(updateLearnedWords(data[0].paginatedResults)));
    }
  }, [authId]);

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
