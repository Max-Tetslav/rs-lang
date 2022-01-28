import React from 'react';
import cl from './MenuBtn.module.scss';

export default function MenuBtn(){
  return (
    <div className={cl.container}>
      <div className={[cl.burger, cl.burger2].join(' ')}>
        <span></span>
      </div>
    </div>
    
  );
}