import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';

import Header from '../components/layout/header/Header';
import Menu from '../components/layout/menu/Menu';
import Modal from '../components/layout/Modal/Modal';
import { getUser } from '../services/userService';
import { checkToken } from '../store/actions/userActions';
import { useAppDispatch, useAppSelector } from '../utils/helpers/appHooks';
import useModal from '../utils/helpers/useModal';

function Root(): JSX.Element {
  const { isShown, toggle } = useModal();
  const loggedIn = useAppSelector((state) => state.users.loggedIn);
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (loggedIn && isShown) {
      toggle();
    }
  }, [loggedIn]);

  useEffect(() => {
    async function checkcUser() {
      await dispatch(checkToken());
    }
    if (loggedIn) {
      checkcUser();
    }
  }, [dispatch, loggedIn]);

  return (
    <>
      <Menu />
      <Header show={toggle} />
      <Modal isShown={isShown} hide={toggle} headerText="Авторизация" />
      <Outlet />
    </>
  );
}

export default Root;
