import React from 'react';
import cl from './Homepage.module.scss';
import HomeContent from '../../components/layout/homeContent/HomeContent';

const Homepage = () => {
  return (
    <main className={cl.container}>
      <HomeContent/>
    </main>
  );
}

export default Homepage;
