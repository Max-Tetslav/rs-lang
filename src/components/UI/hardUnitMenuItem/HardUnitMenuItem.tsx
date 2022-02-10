import React from 'react';
import cl from './HardUnitMenuItem.module.scss';

function HardUnitMenuItem(): JSX.Element {
  return (
    <button className={cl.button} type="button">
      Сложные слова
    </button>
  );
}

export default HardUnitMenuItem;
