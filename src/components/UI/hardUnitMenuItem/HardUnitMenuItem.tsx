import React from 'react';
import { useAppSelector } from '../../../utils/helpers/appHooks';
import cl from './HardUnitMenuItem.module.scss';

interface IProps {
  setIsHardUnit: React.Dispatch<React.SetStateAction<boolean>>;
}

function HardUnitMenuItem({ setIsHardUnit }: IProps): JSX.Element {
  const isAuth = useAppSelector((state) => state.users.loggedIn);

  return (
    <button
      className={cl.button}
      type="button"
      onClick={() => {
        setIsHardUnit(true);
      }}
      disabled={!isAuth}
    >
      Сложные слова
    </button>
  );
}

export default HardUnitMenuItem;
