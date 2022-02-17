import React, { useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { GAMES } from '../../utils/constants/gamesConstants';
import ChosenLevel from './choosenLavel/ChoosenLevel';
import GameCard from '../../components/UI/gameCard/gameCard';
import { ChosenGameProps } from '../../types/gameTypes';
import cl from './Games.module.scss';
import { useAppDispatch } from '../../utils/helpers/appHooks';
import { update } from '../../store/reducers/pageTitleReducer';

function Games(): JSX.Element {
  const [choosenGame, setChoosenGame] = useState<ChosenGameProps | null>(null);
  const [isGameStart, setIsGameStart] = useState(false);
  const dispatch = useAppDispatch();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/games') {
      dispatch(update('Мини-игры'));
      setIsGameStart(false);
      setChoosenGame(null);
    }
  }, [location]);

  return (
    <div>
      {isGameStart && <Outlet />}
      {!isGameStart && (
        <>
          {!choosenGame && (
            <div className={cl.container}>
              {GAMES.map(({ name, link, background, description }) => (
                <GameCard name={name} link={link} img={background} description={description} setChoosenGame={setChoosenGame} />
              ))}
            </div>
          )}
          {choosenGame && (
            <ChosenLevel choosenGame={choosenGame} setChoosenGame={setChoosenGame} setIsGameStart={setIsGameStart} />
          )}
        </>
      )}
    </div>
  );
}

export default Games;
