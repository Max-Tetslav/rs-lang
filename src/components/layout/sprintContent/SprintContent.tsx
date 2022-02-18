import React, { useEffect, useState } from 'react';
import { getWords } from '../../../services/userService';
import { PAGE_NUMBER, WORDS_PER_PAGE } from '../../../utils/constants/gamesConstants';

import { IWord } from '../../../types/wordTypes';
import SprintButton from '../../UI/sprintButton/SprintButton';

import cl from './SprintContent.module.scss';
import SprintWords from '../../UI/sprintWords/SprintWords';
import SprintBonus from '../../UI/sprintBonus/SprintBonus';
import SprintHeader from '../../UI/sprintHeader/SprintHeader';

interface IProps {
  setGameRightAnswers: React.Dispatch<React.SetStateAction<(IWord | null)[]>>;
  setGameWrongAnswers: React.Dispatch<React.SetStateAction<(IWord | null)[]>>;
  setIsResultsShow: React.Dispatch<React.SetStateAction<boolean>>;
  level: number;
}

interface IAnswers {
  [key: number]: Array<string>;
}

function SprintContent({ setGameRightAnswers, setGameWrongAnswers, setIsResultsShow, level }: IProps): JSX.Element {
  const [value, setValue] = useState<number>(60);
  const [score, setscore] = useState<number>(0);
  const [words, setWords] = useState<IWord[] | []>([]);
  const [answers, setAnswers] = useState<IAnswers | null>(null);
  const [isDataLoaded, setIsDataLoaded] = useState(false);
  const [word, setWord] = useState<IWord | null>(null);
  const [answerWord, setAnswerWord] = useState<string>('');
  const [index, setIndex] = useState<number>(0);
  const [hasAnswer, setHasAnswer] = useState<boolean>(false);
  const [bonus, setBonus] = useState<number>(1);
  const [countRightAnswers, setCountRightAnswers] = useState<number>(0);
  const [itemsBonus, setItemsBonus] = useState<Array<number>>([]);
  const [changePage, setChangePage] = useState(true);

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
        if (countRightAnswers <= 3) {
          if (bonus === 8) {
            setCountRightAnswers(1);
          }
          setCountRightAnswers(countRightAnswers + 1);
        } else {
          setCountRightAnswers(1);
        }
      } else {
        setGameWrongAnswers((prev) => [...prev, word]);
        setCountRightAnswers(0);
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
      getWords(Math.floor(Math.random() * PAGE_NUMBER), level).then((data) => {
        setWords(data);
        setIndex(0);
        setIsDataLoaded(true);
      });
    }
    setChangePage(false);
  }, [changePage]);

  useEffect(() => {
    if (isDataLoaded) {
      setAnswerWord(answers![index][Math.floor(Math.random() * 2)]);
      setWord(words[index]);
    }
    setIsDataLoaded(false);
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
    if (countRightAnswers === 4) {
      setBonus(bonus * 2);
      createItemsBonus(0);
    } else {
      createItemsBonus(countRightAnswers);
    }
  }, [countRightAnswers]);

  useEffect(() => {
    if (hasAnswer) {
      setscore(score + bonus * 10);
    }
    setHasAnswer(false);
  }, [hasAnswer]);

  return (
    <div className={cl.container}>
      <SprintHeader time={value} score={score} />
      <SprintBonus bonus={bonus} itemsBonus={itemsBonus} />
      <SprintWords wordEn={word?.word} wordRu={answerWord} />
      <SprintButton checkAnswer={checkAnswer} />
    </div>
  );
}

export default SprintContent;
