import React from 'react';
import cl from './SprintBonus.module.scss';

interface IProps {
  bonus: number;
  itemsBonus: Array<number>;
}

function SprintBonus({ bonus, itemsBonus }: IProps): JSX.Element {
  return (
    <div className={cl.container}>
      <div className={cl.bonus__value}>x{bonus}</div>
      {itemsBonus.map((item) => {
        return <div className={[cl.bonus__item, cl[`bonus__item_${item + 1}`]].join(' ')} />;
      })}
    </div>
  );
}

export default SprintBonus;
