import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Outlet, useLocation } from 'react-router-dom';
import { GAMES } from '../../utils/constants/gamesConstants';
import ChosenLevel from './choosenLavel/ChoosenLevel';
import GameCard from '../../components/UI/gameCard/gameCard';
import { ChosenGameProps } from '../../types/gameTypes';
import { setPageTitle } from '../../store/actions/pageTitleActions';
import cl from './Games.module.scss';

function Games(): JSX.Element {
  const [choosenGame, setChoosenGame] = useState<ChosenGameProps | null>(null);
  const [isGameStart, setIsGameStart] = useState(false);
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    dispatch(setPageTitle('Мини-игры'));
    if (location.pathname === '/games') {
      setIsGameStart(false);
      setChoosenGame(null);
    }
  }, [dispatch, location]);

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
