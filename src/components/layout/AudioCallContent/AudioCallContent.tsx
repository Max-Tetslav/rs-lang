import React, { useEffect, useState } from 'react';
import Answers from '../../UI/answers/Answers';
import AudioCallInfo from '../../UI/audioCallInfo/AudioCallInfo';
import LoadingWordList from '../../UI/loadingWordList/LoadingWordList';
import { getWords } from '../../../services/userService';
import { IWord } from '../../../types/wordTypes';
import playEnglishWord from '../../../utils/helpers/playEnglishWord';
import cl from './AudioCallContent.module.scss';

interface IProps {
  setGameRightAnswers: React.Dispatch<React.SetStateAction<(IWord | null)[]>>;
  setGameWrongAnswers: React.Dispatch<React.SetStateAction<(IWord | null)[]>>;
  setIsResultsShow: React.Dispatch<React.SetStateAction<boolean>>;
  level: number;
  seriesWords: number;
  setSeriesWords: React.Dispatch<React.SetStateAction<number>>;
  page: number;
}

const COUNT_ANSWERS = 3;
const RANDOM_SORT_COEFFICIENT = 0.5;

function AudioCallContent({
  setGameRightAnswers,
  setGameWrongAnswers,
  setIsResultsShow,
  level,
  seriesWords,
  setSeriesWords,
  page,
}: IProps): JSX.Element {
  const [words, setWords] = useState<IWord[] | []>([]);
  const [word, setWord] = useState<IWord | null>(null);
  const [playedWords, setPlayedWords] = useState<string[]>([]);
  const [variantsAnswers, setVariantsAnswers] = useState<string[]>([]);
  const [hasAnswer, setHasAnswer] = useState(false);
  const [isDataLoaded, setIsDataLoaded] = useState(false);
  const [rightAnswer, setRightAnswer] = useState<string | []>('');
  const [answerWord, setAnswerWord] = useState<string | []>('');
  const [series, setSeries] = useState(0);

  const getVariantsAnswers = (randomWord: IWord) => {
    let arrAnswers: string[] = [randomWord?.wordTranslate];
    for (let i = 0; i < COUNT_ANSWERS; i += 1) {
      let randomResponse = words[Math.floor(Math.random() * words.length)];
      while (arrAnswers.includes(randomResponse.wordTranslate)) {
        randomResponse = words[Math.floor(Math.random() * words.length)];
      }
      arrAnswers = [...arrAnswers, randomResponse.wordTranslate];
    }
    arrAnswers.sort(() => Math.random() - RANDOM_SORT_COEFFICIENT);
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
    getWords(page, level).then((data) => {
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

  const checkIsAnswerRight = (answer: string) => {
    if (answer === word?.wordTranslate) {
      setGameRightAnswers((prev) => [...prev, word]);
      setRightAnswer(answer);
      setSeries(series + 1);
    } else {
      setGameWrongAnswers((prev) => [...prev, word]);
      if (seriesWords < series) {
        setSeriesWords(series);
        setSeries(0);
      } else {
        setSeries(0);
      }
    }
  };

  const handleAnswerClick = (answer: string) => {
    if (!hasAnswer) {
      checkIsAnswerRight(answer);
      setAnswerWord(answer);
      setHasAnswer(true);
      if (word && !playedWords.includes(word.word)) {
        setPlayedWords((prev: string[]) => [...prev, word.word]);
      }
    }
  };

  const handleNextWordClick = () => {
    if (playedWords.length !== words.length && words.length) {
      if (hasAnswer) {
        setHasAnswer(false);
        getRandomWord();
        setRightAnswer('');
        setAnswerWord('');
      } else {
        setHasAnswer(true);
        setGameWrongAnswers((prev) => [...prev, word]);
        if (word) {
          setRightAnswer(word?.wordTranslate);
        }
        if (word && !playedWords.includes(word?.word)) {
          setPlayedWords((prev) => [...prev, word?.word]);
        }
      }
    } else {
      setIsResultsShow(true);
      if (seriesWords < series) {
        setSeriesWords(series);
      }
    }
  };

  return (
    <div className={cl.gameContainer}>
      {!isDataLoaded ? (
        <LoadingWordList />
      ) : (
        <>
          <AudioCallInfo hasAnswer={hasAnswer} word={word} />
          <Answers
            handleAnswerClick={handleAnswerClick}
            handleNextWordClick={handleNextWordClick}
            variantsAnswers={variantsAnswers}
            hasAnswer={hasAnswer}
            rightAnswer={rightAnswer.toString()}
            answerWord={answerWord.toString()}
          />
        </>
      )}
    </div>
  );
}

export default AudioCallContent;
