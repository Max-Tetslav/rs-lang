import React from 'react';
import Button from '../../UI/button/Button';
import cl from './Header.module.scss';

interface IProps {title: string};

const Header: React.FC<IProps> = (props: IProps) => {
  return (
    <header className={cl.container}>
      <h1 className={cl.title}>{props.title}</h1>
      <Button content='Войти'/>
    </header>
  );
}

export default Header;
