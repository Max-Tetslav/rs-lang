import React, { useState } from 'react';
import Button from '../../UI/button/Button';
import SignIn from './btn.style';
import cl from './Header.module.scss';

interface IProps {
  title: string;
  show: () => void;
}

function Header({ title, show }: IProps) {
  return (
    <header className={cl.container}>
      <h1 className={cl.title}>{title}</h1>
      <SignIn onClick={show}>Войти</SignIn>
    </header>
  );
}

export default Header;
