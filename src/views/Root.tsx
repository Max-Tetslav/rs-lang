import React from 'react';
import { Outlet } from 'react-router-dom';

import Header from '../components/layout/header/Header';
import Menu from '../components/layout/menu/Menu';

function Root(): JSX.Element {
  return (
    <>
      <Menu />
      <Header title="Главная" />
      <Outlet />
    </>
  );
}

export default Root;
