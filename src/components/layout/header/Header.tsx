import React, { useEffect } from 'react';
import { logout } from '../../../store/actions/userActions';
import { useAppDispatch, useAppSelector } from '../../../utils/helpers/appHooks';
import cl from './Header.module.scss';

interface IProps {
  show: () => void;
}

function Header({ show }: IProps) {
  const dispatch = useAppDispatch();
  const curretPageTitle = useAppSelector((state) => state.title.pageTitle);

  useEffect(() => {}, [curretPageTitle]);

  const handleLogout = () => {
    dispatch(logout());
  };

  const loggedIn = useAppSelector((state) => state.users.loggedIn);
  const user = useAppSelector((state) => state.users.user);
  const btn = loggedIn ? (
    <button className={cl.signIn} onClick={handleLogout} type="button">
      {' '}
      Выйти{' '}
    </button>
  ) : (
    <button className={cl.signIn} onClick={show} type="button">
      {' '}
      Войти{' '}
    </button>
  );

  return (
    <header className={cl.container}>
      <h1 className={cl.title}>{curretPageTitle}</h1>
      <div className={cl.userWrapper}>
        <h4>{user.name}</h4>
        {btn}
      </div>
    </header>
  );
}

export default Header;
