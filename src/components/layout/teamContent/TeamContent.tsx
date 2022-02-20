import React from 'react';
import cl from './TeamContent.module.scss';
import TEAM_DATA from '../../../utils/constants/teamConstants';
import team from '../../../assets/images/team.jpg';

function TeamContent() {
  return (
    <div className={cl.container}>
      <div className={cl.img}>
        <img src={team} alt="" />
      </div>
      <div className={cl.team}>
        {TEAM_DATA.map(({ name, github, image, role, desc }) => {
          return (
            <div className={cl.team__item}>
              <div className={cl.img}>
                <a className={cl.img__link} href={github}>
                  <img className={cl.img__img} src={image} alt="" />
                </a>
              </div>
              <div className={cl.content}>
                <div className={cl.name}>{name}</div>
                <div className={cl.role}>{role}</div>
                <div className={cl.desc}>{desc}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default TeamContent;
