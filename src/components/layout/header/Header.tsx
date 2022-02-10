import React from 'react';
import cl from './Header.module.scss';

interface IProps {
  title: string;
  show: () => void;
}

function Header({ title, show }: IProps) {
  return (
    <header className={cl.container}>
      <h1 className={cl.title}>{title}</h1>
      <button className={cl.signIn} onClick={show} type="button">
        Войти
      </button>
    </header>
  );
}

export default Header;
