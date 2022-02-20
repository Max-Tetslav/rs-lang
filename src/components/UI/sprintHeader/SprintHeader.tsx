import React from 'react';
import cl from './SprintHeader.module.scss';
import timer from '../../../assets/images/timer.png';
import { MAX_BONUS } from '../../../utils/constants/gamesConstants';

interface IProps {
  time: number;
  score: number;
  countRightAnswers: number;
  itemsBonus: Array<number>;
  bonus: number;
}

function SprintHeader({ time, score, countRightAnswers, itemsBonus, bonus }: IProps): JSX.Element {
  const checks = [];
  if (bonus === MAX_BONUS) {
    checks.push(
      <div className={cl.check__item}>
        {' '}
        <div className={cl.img} />
      </div>,
    );
  } else {
    for (let i = 0; i < countRightAnswers - 1; i += 1) {
      if (itemsBonus.includes(i)) {
        checks.push(
          <div className={cl.check__item}>
            {' '}
            <div className={cl.img} />
          </div>,
        );
      } else {
        checks.push(<div className={cl.check__item} />);
      }
    }
  }
  return (
    <div className={cl.container}>
      <div className={cl.score}>+{score}</div>
      <div className={cl.check}>{checks}</div>
      <div className={cl.timer}>
        <img src={timer} alt="" />
        <div className={cl.timer__value}>{time}</div>
      </div>
    </div>
  );
}

export default SprintHeader;
