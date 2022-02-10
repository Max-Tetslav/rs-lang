import React, { useEffect, useState } from 'react';
import Answers from '../../../../components/UI/answers/Answers';
import AudioCallInfo from '../../../../components/UI/audioCallInfo/AudioCallInfo';
import { getWords } from '../../../../services/userService';
import { IWord } from '../../../../types/wordTypes';
import { PAGE_NUMBER } from '../../../../utils/constants/gamesConstants';
import playEnglishWord from '../../../../utils/helpers/playEnglishWord';
import cl from './Game.module.scss';

interface IGameProps {
  setGameRightAnswers: React.Dispatch<React.SetStateAction<(IWord | null)[]>>;
  setGameWrongAnswers: React.Dispatch<React.SetStateAction<(IWord | null)[]>>;
  setIsResultsShow: React.Dispatch<React.SetStateAction<boolean>>;
  level: number;
}

export default function Game({ setGameRightAnswers, setGameWrongAnswers, setIsResultsShow, level }: IGameProps) {
  const [words, setWords] = useState<IWord[] | []>([]);
  const [word, setWord] = useState<IWord | null>(null);
  const [playedWords, setPlayedWords] = useState<string[]>([]);
  const [variantsAnswers, setVariantsAnswers] = useState<string[]>([]);
  const [hasAnswer, setHasAnswer] = useState(false);
  const [isDataLoaded, setIsDataLoaded] = useState(false);

  const getVariantsAnswers = (randomWord: IWord) => {
    let arrAnswers: string[] = [randomWord?.wordTranslate];
    for (let i = 0; i < 3; i += 1) {
      let randomResponse = words[Math.floor(Math.random() * words.length)];
      while (arrAnswers.includes(randomResponse.wordTranslate)) {
        randomResponse = words[Math.floor(Math.random() * words.length)];
      }
      arrAnswers = [...arrAnswers, randomResponse.wordTranslate];
    }
    arrAnswers.sort(() => Math.random() - 0.5);
    setVariantsAnswers(arrAnswers);
  };

  const getRandomWord = () => {
    let randomWord = words[Math.floor(Math.random() * words.length)];
    while (playedWords.includes(randomWord.word)) {
      randomWord = words[Math.floor(Math.random() * words.length)];
    }
    setWord(randomWord);
    getVariantsAnswers(randomWord);
  };

  useEffect(() => {
    getWords(level, Math.floor(Math.random() * PAGE_NUMBER))
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setWords(data);
        setIsDataLoaded(true);
      });
  }, [level]);

  useEffect(() => {
    if (isDataLoaded) {
      getRandomWord();
    }
  }, [isDataLoaded]);

  useEffect(() => {
    if (word) {
      playEnglishWord(word.audio);
    }
  }, [word]);

  useEffect(() => {
    if (playedWords.length === words.length && words.length) {
      setIsResultsShow(true);
    }
  }, [playedWords, words]);

  const checkIsAnswerRight = (answer: string) => {
    if (answer === word?.wordTranslate) {
      setGameRightAnswers((prev) => [...prev, word]);
    } else {
      setGameWrongAnswers((prev) => [...prev, word]);
    }
  };

  const handleAnswerClick = (answer: string) => {
    if (!hasAnswer) {
      checkIsAnswerRight(answer);
      setHasAnswer(true);
      if (word && !playedWords.includes(word.word)) {
        setPlayedWords((prev: string[]) => [...prev, word.word]);
      }
    }
  };

  const handleNextWordClick = () => {
    if (hasAnswer) {
      setHasAnswer(false);
      getRandomWord();
    } else {
      setHasAnswer(true);
      setGameWrongAnswers((prev) => [...prev, word]);
      if (word && !playedWords.includes(word?.word)) {
        setPlayedWords((prev) => [...prev, word?.word]);
      }
    }
  };

  return (
    <div className={cl.gameContainer}>
      <AudioCallInfo hasAnswer={hasAnswer} word={word} />
      <Answers
        handleAnswerClick={handleAnswerClick}
        handleNextWordClick={handleNextWordClick}
        variantsAnswers={variantsAnswers}
        hasAnswer={hasAnswer}
      />
    </div>
  );
}
