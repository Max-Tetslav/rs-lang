import React, { useEffect, useState } from 'react';
import SprintContent from '../../../components/layout/sprintContent/SprintContent';
import PreLoadingGame from '../../../components/UI/preLoadingGame/PreLoadingGame';
import Results from '../../../components/UI/results/Results';
import { getWords } from '../../../services/userService';
import { IWord } from '../../../types/wordTypes';
import { useAppSelector } from '../../../utils/helpers/appHooks';
import cl from './GamePageSprint.module.scss';

export default function Sprint(): JSX.Element {
  const level = useAppSelector((state) => state.games.level);
  const page = useAppSelector((state) => state.games.page);
  const [gameRightAnswers, setGameRightAnswers] = useState<(IWord | null)[] | []>([]);
  const [gameWrongAnswers, setGameWrongAnswers] = useState<(IWord | null)[] | []>([]);
  const [isResultsShow, setIsResultsShow] = useState(false);
  const [preLoading, setPreLoading] = useState<number>(3);
  const [words, setWords] = useState<IWord[] | []>([]);

  useEffect(() => {
    getWords(page, level).then((data) => {
      setWords(data);
    });
  }, []);

  useEffect(() => {
    if (preLoading > 0) {
      const timer = setInterval(() => setPreLoading((prev) => prev - 1), 1000);
      return () => {
        clearInterval(timer);
      };
    }
  }, [preLoading]);

  return (
    <section className={cl.sprint}>
      {!isResultsShow && preLoading > 0 ? (
        <PreLoadingGame value={preLoading} />
      ) : (
        <SprintContent
          level={level}
          setIsResultsShow={setIsResultsShow}
          setGameRightAnswers={setGameRightAnswers}
          setGameWrongAnswers={setGameWrongAnswers}
          words={words}
          setWords={setWords}
        />
      )}
      {isResultsShow ? (
        <Results
          setIsResultsShow={setIsResultsShow}
          rightAnswers={gameRightAnswers}
          wrongAnswers={gameWrongAnswers}
          setRightAnswers={setGameRightAnswers}
          setWrongAnswers={setGameWrongAnswers}
        />
      ) : (
        ''
      )}
    </section>
  );
}
