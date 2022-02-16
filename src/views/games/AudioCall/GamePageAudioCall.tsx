import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Results from '../../../components/UI/results/Results';
import { setPageTitle } from '../../../store/actions/pageTitleActions';
import { IWord } from '../../../types/wordTypes';
import AudioCallContent from '../../../components/layout/AudioCallContent/AudioCallContent';
import cl from './GamePageAudioCall.module.scss';

const selectGameLevel = (state: any) => state.games.level; // eslint-disable-line

function AudioCall() {
  const dispatch = useDispatch();
  const level = useSelector(selectGameLevel);
  const [gameRightAnswers, setGameRightAnswers] = useState<(IWord | null)[] | []>([]);
  const [gameWrongAnswers, setGameWrongAnswers] = useState<(IWord | null)[] | []>([]);
  const [isResultsShow, setIsResultsShow] = useState(false);

  useEffect(() => {
    dispatch(setPageTitle('Аудиовызов'));
  }, [dispatch]);

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
