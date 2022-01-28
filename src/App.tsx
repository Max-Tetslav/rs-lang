import React, { Fragment } from 'react';

import Header from './components/layout/header/Header';
import Menu from './components/layout/menu/Menu';
import Homepage from './views/homepage/Homepage';

function App() {
  return (
    <Fragment>
      <Menu/>
      <Header title='Главная'/>
      <Homepage/>
    </Fragment>
  );
}

export default App;
