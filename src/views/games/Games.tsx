import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Outlet, useLocation } from 'react-router-dom';
import { GAMES } from '../../utils/constants/gamesConstants';
import ChosenLevel from './chosenLavel/ChosenLevel';
import GameCard from '../../components/UI/gameCard/gameCard';
import { ChosenGameProps } from '../../types/gameTypes';
import { setPageTitle } from '../../store/actions/pageTitleActions';
import cl from './Games.module.scss';

function Games(): JSX.Element {
  const [chosenGame, setChosenGame] = useState<ChosenGameProps | null>(null);
  const [isGameStart, setIsGameStart] = useState(false);
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    dispatch(setPageTitle('Мини-игры'));
    if (location.pathname === '/games') {
      setIsGameStart(false);
      setChosenGame(null);
    }
  }, [dispatch, location]);

  return (
    <div>
      {isGameStart && <Outlet />}
      {!isGameStart && (
        <>
          {!chosenGame && (
            <div className={cl.container}>
              {GAMES.map(({ name, link, background, description }) => (
                <GameCard name={name} link={link} img={background} description={description} setChosenGame={setChosenGame} />
              ))}
            </div>
          )}
          {chosenGame && <ChosenLevel chosenGame={chosenGame} setChosenGame={setChosenGame} setIsGameStart={setIsGameStart} />}
        </>
      )}
    </div>
  );
}

export default Games;
