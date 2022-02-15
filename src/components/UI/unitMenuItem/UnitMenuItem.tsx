import React from 'react';
import cl from './UnitMenuItem.module.scss';

interface IProps {
  unitNum: string;
  setUnit: React.Dispatch<React.SetStateAction<number>>;
  setPageNum: React.Dispatch<React.SetStateAction<number>>;
  resetHardUnit: React.Dispatch<React.SetStateAction<boolean>>;
}

function UnitMenuItem({ unitNum, setUnit, setPageNum, resetHardUnit }: IProps): JSX.Element {
  return (
    <button
      className={cl.button}
      type="button"
      onClick={() => {
        resetHardUnit(false);
        setPageNum(0);
        setUnit(Number(unitNum) - 1);
      }}
    >
      {unitNum ? `Часть ${unitNum}` : 'Сложные слова'}
    </button>
  );
}

export default UnitMenuItem;
