import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import cl from './Homepage.module.scss';
import HomeContent from '../../components/layout/homeContent/HomeContent';
import { setPageTitle } from '../../store/actions';

function Homepage(): JSX.Element {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPageTitle('Главная'));
  }, [dispatch]);
  return (
    <main className={cl.container}>
      <HomeContent />
    </main>
  );
}

export default Homepage;
