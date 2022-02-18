import React, { useState } from 'react';
import SprintContent from '../../../components/layout/sprintContent/SprintContent';
import Results from '../../../components/UI/results/Results';
import { IWord } from '../../../types/wordTypes';
import { useAppSelector } from '../../../utils/helpers/appHooks';
import cl from './GamePageSprint.module.scss';

export default function Sprint(): JSX.Element {
  const level = useAppSelector((state) => state.games.level);
  const [gameRightAnswers, setGameRightAnswers] = useState<(IWord | null)[] | []>([]);
  const [gameWrongAnswers, setGameWrongAnswers] = useState<(IWord | null)[] | []>([]);
  const [isResultsShow, setIsResultsShow] = useState(false);

  return (
    <section className={cl.sprint}>
      {!isResultsShow ? (
        <SprintContent
          level={level}
          setIsResultsShow={setIsResultsShow}
          setGameRightAnswers={setGameRightAnswers}
          setGameWrongAnswers={setGameWrongAnswers}
        />
      ) : (
        <Results
          setIsResultsShow={setIsResultsShow}
          rightAnswers={gameRightAnswers}
          wrongAnswers={gameWrongAnswers}
          setRightAnswers={setGameRightAnswers}
          setWrongAnswers={setGameWrongAnswers}
        />
      )}
    </section>
  );
}
