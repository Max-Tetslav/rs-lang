import React, { useState } from 'react';
import Results from '../../../components/UI/results/Results';
import { IWord } from '../../../types/wordTypes';
import AudioCallContent from '../../../components/layout/AudioCallContent/AudioCallContent';
import cl from './GamePageAudioCall.module.scss';
import { useAppSelector } from '../../../utils/helpers/appHooks';

function AudioCall(): JSX.Element {
  const level = useAppSelector((state) => state.games.level);
  const [gameRightAnswers, setGameRightAnswers] = useState<(IWord | null)[] | []>([]);
  const [gameWrongAnswers, setGameWrongAnswers] = useState<(IWord | null)[] | []>([]);
  const [isResultsShow, setIsResultsShow] = useState(false);

  return (
    <div className={cl.audioGameContainer}>
      {!isResultsShow ? (
        <AudioCallContent
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
    </div>
  );
}

export default AudioCall;
