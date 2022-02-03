import React from 'react';
import cl from './BenefitCard.module.scss';

interface IProps {
  title: string;
  content: string;
  icon: string;
  iconAlt: string;
}

function BenefitCard({ title, content, icon, iconAlt }: IProps): JSX.Element {
  return (
    <div className={cl.card}>
      <div className={cl.titleContainer}>
        <img src={icon} alt={iconAlt} className={cl.img} />
        <h4>{title}</h4>
      </div>
      <p>{content}</p>
    </div>
  );
}

export default BenefitCard;
