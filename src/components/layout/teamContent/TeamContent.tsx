import React from 'react';
import cl from './TeamContent.module.scss';
import TEAM_DATA from '../../../utils/constants/teamConstants';
import githubLogo from '../../../assets/images/github-logo.png';

function TeamContent() {
  return (
    <div className={cl.container}>
      <div className={cl.team}>
        {TEAM_DATA.map(({ name, github, image, role, desc }) => {
          return (
            <div className={cl.team__item}>
              <div className={cl.img}>
                <img className={cl.img__img} src={image} alt="" />
              </div>
              <div className={cl.content}>
                <div className={cl.name}>
                  {name}
                  <a className={cl.github} href={github} target="_blank" rel="noreferrer">
                    <img src={githubLogo} alt="" />
                  </a>
                </div>
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
