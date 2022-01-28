import React from 'react';
import cl from './BenefitCard.module.scss';

interface IProps {title: string, content: string, icon: string, iconAlt: string};

const BenefitCard: React.FC<IProps> = (props: IProps) => {
  return (
    <div className={cl.card}>
      <div className={cl.titleContainer}>
        <img src={props.icon} alt={props.iconAlt} className={cl.img}/>
        <h4>{props.title}</h4>
      </div>
      <p>{props.content}</p>
    </div>
  );
}

export default BenefitCard;
