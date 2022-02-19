import React from 'react';
import cl from './unitsMenu.module.scss';

import UnitMenuItem from '../../UI/unitMenuItem/UnitMenuItem';
import HardUnitMenuItem from '../../UI/hardUnitMenuItem/HardUnitMenuItem';
import GameLink from '../../UI/gameLink/GameLink';
import { EPageTitles, EPageUrls } from '../../../types/pageTitleTypes';

interface IProps {
  setCurrentUnit: React.Dispatch<React.SetStateAction<number>>;
  changePage: React.Dispatch<React.SetStateAction<number>>;
  setHardUnit: React.Dispatch<React.SetStateAction<boolean>>;
}

function UnitsMenu({ setCurrentUnit, changePage, setHardUnit }: IProps): JSX.Element {
  return (
    <div className={cl.container}>
      <UnitMenuItem unitNum="1" setUnit={setCurrentUnit} setPageNum={changePage} resetHardUnit={setHardUnit} />
      <UnitMenuItem unitNum="2" setUnit={setCurrentUnit} setPageNum={changePage} resetHardUnit={setHardUnit} />
      <UnitMenuItem unitNum="3" setUnit={setCurrentUnit} setPageNum={changePage} resetHardUnit={setHardUnit} />
      <UnitMenuItem unitNum="4" setUnit={setCurrentUnit} setPageNum={changePage} resetHardUnit={setHardUnit} />
      <UnitMenuItem unitNum="5" setUnit={setCurrentUnit} setPageNum={changePage} resetHardUnit={setHardUnit} />
      <UnitMenuItem unitNum="6" setUnit={setCurrentUnit} setPageNum={changePage} resetHardUnit={setHardUnit} />
      <GameLink title={EPageTitles.audiocall} gameLink={EPageUrls.audiocall} />
      <GameLink title={EPageTitles.sprint} gameLink={EPageUrls.sprint} />
      <HardUnitMenuItem setIsHardUnit={setHardUnit} />
    </div>
  );
}

export default UnitsMenu;
