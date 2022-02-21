import React, { useEffect } from 'react';
import { useAppSelector } from '../../../utils/helpers/appHooks';
import useModal from '../../../utils/helpers/useModal';
import ModalLogout from '../modalLogout/ModalLogout';
import cl from './Header.module.scss';

interface IProps {
  show: () => void;
}

function Header({ show }: IProps) {
  const curretPageTitle = useAppSelector((state) => state.title.pageTitle);
  const { isShown, toggle } = useModal();

  useEffect(() => {}, [curretPageTitle]);

  const handleLogoutModal = () => {
    toggle();
  };

  const loggedIn = useAppSelector((state) => state.users.loggedIn);
  const user = useAppSelector((state) => state.users.user);
  const btn = loggedIn ? (
    <button className={cl.signIn} onClick={handleLogoutModal} type="button">
      Выйти
    </button>
  ) : (
    <button className={cl.signIn} onClick={show} type="button">
      Войти
    </button>
  );

  return (
    <header className={cl.container}>
      <h1 className={cl.title}>{curretPageTitle}</h1>
      <div className={cl.userWrapper}>
        <h4 className={cl.userName}>{user.name}</h4>
        {btn}
      </div>
      {isShown ? <ModalLogout isShown={isShown} hide={toggle} headerText="Подтвердите выход" /> : ''}
    </header>
  );
}

export default Header;
