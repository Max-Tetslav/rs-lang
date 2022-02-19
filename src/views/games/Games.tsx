import React, { useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { GAMES } from '../../utils/constants/gamesConstants';
import ChosenLevel from './choosenLevel/ChoosenLevel';
import GameCard from '../../components/UI/gameCard/gameCard';
import { ChosenGameProps } from '../../types/gameTypes';
import cl from './Games.module.scss';
import { useAppDispatch, useAppSelector } from '../../utils/helpers/appHooks';
import { update } from '../../store/reducers/pageTitleReducer';
import { setIsGameStart } from '../../store/reducers/gameReducer';

function Games(): JSX.Element {
  const [choosenGame, setChoosenGame] = useState<ChosenGameProps | null>(null);
  const isGameStart = useAppSelector((state) => state.games.isGameStart);
  const dispatch = useAppDispatch();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/games') {
      dispatch(update('Мини-игры'));
      dispatch(setIsGameStart(false));
      setChoosenGame(null);
    }
  }, [location]);

  return (
    <main className={cl.container}>
      {isGameStart && <Outlet />}
      {!isGameStart && (
        <>
          {!choosenGame && (
            <div className={cl.GameCardsContainer}>
              {GAMES.map(({ name, link, background, description }) => (
                <GameCard name={name} link={link} img={background} description={description} setChoosenGame={setChoosenGame} />
              ))}
            </div>
          )}
          {choosenGame && <ChosenLevel choosenGame={choosenGame} setChoosenGame={setChoosenGame} />}
        </>
      )}
    </main>
  );
}

export default Games;
