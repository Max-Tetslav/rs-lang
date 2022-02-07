import React from 'react';
import { Grid, Card, Typography, Avatar } from '@material-ui/core';
import cl from './gameCard.module.scss';
import Button from '../button/Button';
import { ChosenGameProps } from '../../../types/gameTypes';

interface GameCardProps {
  name: string;
  link: string;
  img: string;
  description: string;
  setChosenGame: React.Dispatch<React.SetStateAction<ChosenGameProps | null>>;
}

export default function GameCard({ name, link, img, description, setChosenGame }: GameCardProps) {
  const handlePlayButtonClick = () => {
    setChosenGame({ gameName: name, gameLink: link });
  };
  return (
    <Card key={name} className={`${cl.cardWrapper} ${cl.wrapper}`}>
      <Grid container className={cl.wrapper}>
        <Grid container>
          <Grid item xs={12} className={`${cl.avatarWrapper} ${cl.wrapper}`}>
            <Avatar alt={name} src={img} className={`${cl.avatarSize} ${cl.avatar}`} />
          </Grid>
          <Grid item xs={12} className={cl.wrapper}>
            <Typography className={`${cl.title} ${cl.titleWrapper}`}>{name}</Typography>
          </Grid>
        </Grid>
        <Grid item xs={12} className={`${cl.descriptionWrapper} ${cl.wrapper}`}>
          <Typography className={`${cl.description} ${cl.text}`}>{description}</Typography>
        </Grid>
        <Grid item xs={12} className={`${cl.buttonWrapper} ${cl.wrapper}`}>
          <Button click={handlePlayButtonClick} content="Играть" />
        </Grid>
      </Grid>
    </Card>
  );
}
