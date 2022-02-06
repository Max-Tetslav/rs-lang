import React from 'react';
import { Outlet } from 'react-router-dom';

import Header from '../components/layout/header/Header';
import Menu from '../components/layout/menu/Menu';
import Modal from '../components/layout/Modal/Modal';
import useModal from '../utils/helpers/useModal';

function Root(): JSX.Element {
  const { isShown, toggle } = useModal();

  return (
    <>
      <Menu />
      <Header title="Главная" show={toggle} />
      <Modal isShown={isShown} hide={toggle} headerText="Авторизация" />
      <Outlet />
    </>
  );
}

export default Root;
