import React from 'react';
import cl from './BenefitCard.module.scss';

export default function BenefitCard(props: {title: string, content: string, icon: string}) {
  return (
    <div className={cl.card}>
      <div className={cl.titleContainer}>
        <img src={props.icon} alt="heart" className={cl.img}/>
        <h4>{props.title}</h4>
      </div>
      <p>{props.content}</p>
    </div>
  );
}