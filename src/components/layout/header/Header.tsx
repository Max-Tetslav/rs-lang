import React from 'react';
import Button from '../../UI/button/Button';
import cl from './Header.module.scss';

export default function Header(props: {title: string}) {
  return (
    <header className={cl.container}>
      <h1 className={cl.title}>{props.title}</h1>
      <Button content='Войти'/>
    </header>
  );
}
