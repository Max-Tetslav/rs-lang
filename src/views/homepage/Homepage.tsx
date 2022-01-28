import React from 'react';
import cl from './Homepage.module.scss';
import HomeContent from '../../components/layout/homeContent/HomeContent';


export default function Homepage() {
  return (
    <main className={cl.container}>
      <HomeContent/>
    </main>
  );
}
