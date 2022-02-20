import React, { useEffect, useState } from 'react';
import { getWords } from '../../../services/userService';
import {
  INCREASE_BONUS,
  MAX_BONUS,
  MAX_RIGHT_ANSWER,
  MULTIPLY_BONUS,
  SERIES_OF_ANSWER,
} from '../../../utils/constants/gamesConstants';

import { IWord } from '../../../types/wordTypes';
import SprintButton from '../../UI/sprintButton/SprintButton';

import cl from './SprintContent.module.scss';
import SprintWords from '../../UI/sprintWords/SprintWords';
import SprintBonus from '../../UI/sprintBonus/SprintBonus';
import SprintHeader from '../../UI/sprintHeader/SprintHeader';
import { updatePage } from '../../../store/reducers/gameReducer';
import { useAppDispatch, useAppSelector } from '../../../utils/helpers/appHooks';

interface IProps {
  setGameRightAnswers: React.Dispatch<React.SetStateAction<(IWord | null)[]>>;
  setGameWrongAnswers: React.Dispatch<React.SetStateAction<(IWord | null)[]>>;
  setIsResultsShow: React.Dispatch<React.SetStateAction<boolean>>;
  level: number;
  words: Array<IWord>;
  setWords: React.Dispatch<React.SetStateAction<IWord[]>>;
}

interface IAnswers {
  [key: number]: Array<string>;
}

function SprintContent({
  setGameRightAnswers,
  setGameWrongAnswers,
  setIsResultsShow,
  level,
  words,
  setWords,
}: IProps): JSX.Element {
  const [value, setValue] = useState<number>(60);
  const [score, setscore] = useState<number>(0);
  const [answers, setAnswers] = useState<IAnswers | null>(null);
  const [isDataLoaded, setIsDataLoaded] = useState(false);
  const [word, setWord] = useState<IWord | null>(null);
  const [answerWord, setAnswerWord] = useState<string>('');
  const [index, setIndex] = useState<number>(0);
  const [hasAnswer, setHasAnswer] = useState<boolean>(false);
  const [bonus, setBonus] = useState<number>(1);
  const [countRightAnswers, setCountRightAnswers] = useState<number>(0);
  const [itemsBonus, setItemsBonus] = useState<Array<number>>([]);
  const [changePage, setChangePage] = useState(false);
  const [seriesOfAnswers, setSeriesOfAnswers] = useState<number>(1);
  const [page, setPage] = useState(useAppSelector((state) => state.games.page) + 1);

  const dispatch = useAppDispatch();

  const getRandomWord = () => {
    return words[Math.floor(Math.random() * words.length)];
  };

  const createItemsBonus = (count: number) => {
    const result = [];
    for (let i = 0; i < count; i += 1) {
      result.push(i);
    }
    setItemsBonus(result);
  };

  const createAnswersArray = () => {
    const result: IAnswers = {};
    for (let i = 0; i < words.length; i += 1) {
      result[i] = [words[i].wordTranslate, getRandomWord().wordTranslate];
    }
    setAnswers(result);
  };
  const checkAnswer = (flag: boolean) => {
    if (index < words.length - 1) {
      if ((word?.wordTranslate === answerWord) === flag) {
        setHasAnswer(true);
        setGameRightAnswers((prev) => [...prev, word]);
        if (countRightAnswers < MAX_RIGHT_ANSWER) {
          if (bonus === MAX_BONUS) {
            setCountRightAnswers(1);
          } else {
            setCountRightAnswers(countRightAnswers + 1);
          }
        } else {
          setCountRightAnswers(1);
        }
      } else {
        setGameWrongAnswers((prev) => [...prev, word]);
        setCountRightAnswers(0);
        setSeriesOfAnswers(1);
        setBonus(1);
        setHasAnswer(false);
      }
      setIndex(index + 1);
    } else {
      setChangePage(true);
    }
  };
  useEffect(() => {
    const timer = setInterval(() => setValue((prev) => prev - 1), 1000);
    return () => {
      clearInterval(timer);
    };
  }, [value]);

  useEffect(() => {
    if (value <= 0) {
      setIsResultsShow(true);
    }
  }, [value]);

  useEffect(() => {
    if (changePage) {
      getWords(page, level).then((data) => {
        setWords(data);
        setIndex(0);
        setIsDataLoaded(true);
      });
      setPage(page + 1);
      setChangePage(false);
    }
  }, [changePage]);

  useEffect(() => {
    setIsDataLoaded(true);
  }, []);

  useEffect(() => {
    if (isDataLoaded) {
      setAnswerWord(answers![index][Math.floor(Math.random() * 2)]);
      setWord(words[index]);
      setIsDataLoaded(false);
    }
  }, [answers]);

  useEffect(() => {
    if (isDataLoaded) {
      createAnswersArray();
    }
  }, [isDataLoaded]);

  useEffect(() => {
    if (index < words.length && index !== 0) {
      setAnswerWord(answers![index][Math.floor(Math.random() * 2)]);
      setWord(words[index]);
    }
  }, [index]);

  useEffect(() => {
    if (countRightAnswers === MAX_RIGHT_ANSWER) {
      setBonus(bonus * INCREASE_BONUS);
      if (seriesOfAnswers !== SERIES_OF_ANSWER) {
        setSeriesOfAnswers(seriesOfAnswers + 1);
      }
      createItemsBonus(0);
    } else {
      createItemsBonus(countRightAnswers);
    }
  }, [countRightAnswers]);

  useEffect(() => {
    if (hasAnswer) {
      setscore(score + bonus * MULTIPLY_BONUS);
      setHasAnswer(false);
    }
  }, [hasAnswer]);

  return (
    <div className={cl.container}>
      <SprintHeader time={value} score={score} countRightAnswers={MAX_RIGHT_ANSWER} itemsBonus={itemsBonus} bonus={bonus} />
      <SprintBonus bonus={bonus} seriesOfAnswers={seriesOfAnswers} />
      <SprintWords wordEn={word?.word} wordRu={answerWord} />
      <SprintButton checkAnswer={checkAnswer} />
    </div>
  );
}

export default SprintContent;
