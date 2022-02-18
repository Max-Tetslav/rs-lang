import React from 'react';
import cl from './SprintHeader.module.scss';
import timer from '../../../assets/images/timer.png';

interface IProps {
  time: number;
  score: number;
}

function SprintHeader({ time, score }: IProps): JSX.Element {
  return (
    <div className={cl.container}>
      <div className={cl.score}>x{score}</div>
      <div className={cl.timer}>
        <img src={timer} alt="" />
        <div className={cl.timer__value}>{time}</div>
      </div>
    </div>
  );
}

export default SprintHeader;
