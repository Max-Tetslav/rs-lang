import React from 'react';
import cl from './BenefitsList.module.scss';
import heartSvg from '../../../../assets/svg/heart.svg';
import stonksSvg from '../../../../assets/svg/stonks.svg';
import studentSvg from '../../../../assets/svg/student.svg';
import gameSvg from '../../../../assets/svg/game.svg';

import BenefitCard from '../../../UI/benefitCard/BenefitCard';

function BenefitsList(): JSX.Element {
  return (
    <div className={cl.cardList}>
      <BenefitCard
        icon={studentSvg}
        iconAlt="student-icon"
        title="Слова разделены по уровню сложности"
        content="Учебник состоит из 6 модулей, независимо от вашего уровня, вы найдете материал, который подходит именно вам"
      />
      <BenefitCard
        icon={heartSvg}
        iconAlt="heart-icon"
        title="Бесплатный доступ"
        content="Изучайте новый материал, добавляйте незнакомые слова, а также повторяйте сложные слова и тренируйтесь в формате мини-игр абсолютно бесплатно!"
      />
      <BenefitCard
        icon={stonksSvg}
        iconAlt="stonks-icon"
        title="Краткосрочная статистика"
        content="Авторизированным пользователям доступна возможность следить за прогрессом обучения, а также статистика результатов в мини-играх"
      />
      <BenefitCard
        icon={gameSvg}
        iconAlt="game-icon"
        title="Обучение в игровом формате"
        content='Вы получите удовольствие от изучения Английского языка с помощью мини-игр "Саванна" и "Спринт", больше никакой зубрежки словаря!'
      />
    </div>
  );
}

export default BenefitsList;
