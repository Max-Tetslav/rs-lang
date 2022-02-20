import React from 'react';
import cl from './MenuLogo.module.scss';
import logo from '../../../assets/svg/rslogo.svg';

function MenuLogo(): JSX.Element {
  return (
    <div className={cl.container}>
      <img src={logo} alt="app-logo" className={cl.logo} />
    </div>
  );
}

export default MenuLogo;
