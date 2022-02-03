import React from 'react';
import cl from './HomeContent.module.scss';
import mem from '../../../assets/images/mem.jpg';
import Button from '../../UI/button/Button';
import BenefitsList from './benefitsList/BenefitsList';

function HomeContent(): JSX.Element {
  return (
    <section className={cl.container}>
      <img className={cl.mem} src={mem} alt="mem" />
      <div className={cl.infoContainer}>
        <h2>Учите новые слова с RS-Lang</h2>
        <p>
          Приложение для изучения иностранных слов с техникой интервального повторения, отслеживания индивидуального прогресса и
          мини-игр.
        </p>
        <Button content="Смотреть демонстацию" />
      </div>
      <BenefitsList />
    </section>
  );
}

export default HomeContent;
