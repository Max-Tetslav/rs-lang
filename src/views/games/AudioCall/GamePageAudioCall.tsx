import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPageTitle } from '../../../store/actions/pageTitleActions';
import { State } from '../../../types/gameTypes';
import { IWord } from '../../../types/wordTypes';
import Game from './game/Game';
import cl from './GamePageAudioCall.module.scss';

const selectGameLevel = (state: State) => state.gameReducer.level;

export default function AudioCall() {
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
        <Game
          level={level}
          setIsResultsShow={setIsResultsShow}
          setGameRightAnswers={setGameRightAnswers}
          setGameWrongAnswers={setGameWrongAnswers}
        />
      ) : (
        <div>aaaaaaaaaa</div>
      )}
    </div>
  );
}
