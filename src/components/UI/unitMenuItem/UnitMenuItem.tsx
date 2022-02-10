import React from 'react';
import cl from './UnitMenuItem.module.scss';

interface IProps {
  unitNum: string;
  setUnit: React.Dispatch<React.SetStateAction<number>>;
}

function UnitMenuItem({ unitNum, setUnit }: IProps): JSX.Element {
  return (
    <button className={cl.button} onClick={() => setUnit(Number(unitNum) - 1)} type="button">
      {unitNum ? `Часть ${unitNum}` : 'Сложные слова'}
    </button>
  );
}

export default UnitMenuItem;
