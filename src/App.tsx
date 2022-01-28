import React, { Fragment } from 'react';
import { Outlet } from 'react-router-dom';

import Header from './components/layout/header/Header';
import Menu from './components/layout/menu/Menu';

const App = () => {
  return (
    <Fragment>
      <Menu/>
      <Header title='Главная'/>
      <Outlet/>
    </Fragment>
  );
}

export default App;
