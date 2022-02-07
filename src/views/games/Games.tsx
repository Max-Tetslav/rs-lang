import React, { useState } from 'react';
import { Grid } from '@material-ui/core';
import { GAMES } from '../../utils/constants/gamesConstants';
import ChosenLevel from './ChosenLavel/ChosenLevel';
import GameCard from '../../components/UI/gameCard/gameCard';
import { ChosenGameProps } from '../../types/gameTypes';

function Games(): JSX.Element {
  const [chosenGame, setChosenGame] = useState<ChosenGameProps | null>(null);
  return (
    <>
      {!chosenGame && (
        <Grid container direction="row" justifyContent="space-around" alignItems="center" style={{ height: '100%' }}>
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
