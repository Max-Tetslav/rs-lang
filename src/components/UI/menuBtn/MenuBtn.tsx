import React from 'react';
import cl from './MenuBtn.module.scss';

const MenuBtn = () => {
  return (
    <div className={cl.container}>
      <div className={[cl.burger, cl.burger2].join(' ')}>
        <span></span>
      </div>
    </div>
    
  );
}

export default MenuBtn;
