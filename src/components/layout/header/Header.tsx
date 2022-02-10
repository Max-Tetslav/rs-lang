import React from 'react';
import Button from '../../UI/button/Button';
import cl from './Header.module.scss';

interface IProps {
  title: string;
}

function Header({ title }: IProps): JSX.Element {
  return (
    <header className={cl.container}>
      <h1 className={cl.title}>{title}</h1>
      <Button clickHandler={() => 0} content="Войти" />
    </header>
  );
}

export default Header;
