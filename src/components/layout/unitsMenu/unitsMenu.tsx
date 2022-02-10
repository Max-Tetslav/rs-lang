import React from 'react';
import cl from './unitsMenu.module.scss';

import UnitMenuItem from '../../UI/unitMenuItem/UnitMenuItem';

interface IProps {
  setCurrentUnit: React.Dispatch<React.SetStateAction<number>>;
}

function UnitsMenu({ setCurrentUnit }: IProps): JSX.Element {
  return (
    <div className={cl.container}>
      <UnitMenuItem unitNum="1" setUnit={setCurrentUnit} />
      <UnitMenuItem unitNum="2" setUnit={setCurrentUnit} />
      <UnitMenuItem unitNum="3" setUnit={setCurrentUnit} />
      <UnitMenuItem unitNum="4" setUnit={setCurrentUnit} />
      <UnitMenuItem unitNum="5" setUnit={setCurrentUnit} />
      <UnitMenuItem unitNum="6" setUnit={setCurrentUnit} />
      <UnitMenuItem unitNum="" setUnit={setCurrentUnit} />
    </div>
  );
}

export default UnitsMenu;
