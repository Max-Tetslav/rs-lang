import React from 'react';
import cl from './MenuBtn.module.scss';

function MenuBtn(): JSX.Element {
  return (
    <div className={cl.container}>
      <div className={[cl.burger, cl.burger2].join(' ')}>
        <span />
      </div>
    </div>
  );
}

export default MenuBtn;
