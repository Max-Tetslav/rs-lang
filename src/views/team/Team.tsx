import React from 'react';
import TeamContent from '../../components/layout/teamContent/TeamContent';
import cl from './Team.module.scss';

function Team(): JSX.Element {
  return (
    <main className={cl.container}>
      <TeamContent />
    </main>
  );
}

export default Team;
