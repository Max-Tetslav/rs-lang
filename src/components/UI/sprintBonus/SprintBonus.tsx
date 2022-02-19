import React, { JSXElementConstructor } from 'react';
import cl from './SprintBonus.module.scss';

interface IProps {
  bonus: number;
  seriesOfAnswers: number;
}

function SprintBonus({ bonus, seriesOfAnswers }: IProps): JSX.Element {
  const stars = [];
  for (let i = 0; i < seriesOfAnswers; i += 1) {
    stars.push(<div className={cl.bonus__item} />);
  }

  return (
    <div className={cl.container}>
      <div className={cl.bonus__value}>x{bonus}</div>
      <div className={cl.bonus}>{stars}</div>
    </div>
  );
}

export default SprintBonus;
