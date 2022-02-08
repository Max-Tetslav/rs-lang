import React from 'react';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';

import Header from '../components/layout/header/Header';
import Menu from '../components/layout/menu/Menu';
import { State } from '../types/gameTypes';

const selectPageTitle = (state: State) => state.commonReducer.title;

function Root(): JSX.Element {
  const title = useSelector(selectPageTitle);
  return (
    <>
      <Menu />
      <Header title={title} />
      <Outlet />
    </>
  );
}

export default Root;
