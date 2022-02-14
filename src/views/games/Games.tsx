import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Grid } from '@material-ui/core';
import { GAMES } from '../../utils/constants/gamesConstants';
import ChosenLevel from './chosenLavel/ChosenLevel';
import GameCard from '../../components/UI/gameCard/gameCard';
import { ChosenGameProps } from '../../types/gameTypes';
import { setPageTitle } from '../../store/actions/pageTitleActions';

function Games(): JSX.Element {
  const [chosenGame, setChosenGame] = useState<ChosenGameProps | null>(null);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPageTitle('Мини-игры'));
  }, [dispatch]);

  return (
    <>
      {!chosenGame && (
        <Grid container direction="row" justifyContent="space-around" alignItems="center" style={{ height: '90%' }}>
          {GAMES.map(({ name, link, background, description }) => (
            <GameCard name={name} link={link} img={background} description={description} setChosenGame={setChosenGame} />
          ))}
        </Grid>
      )}
      {chosenGame && <ChosenLevel chosenGame={chosenGame} setChosenGame={setChosenGame} />}
    </>
  );
}

export default Games;
