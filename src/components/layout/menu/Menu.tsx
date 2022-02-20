import React from 'react';
import cl from './Menu.module.scss';
import homeSvg from '../../../assets/svg/home.svg';
import bookSvg from '../../../assets/svg/book.svg';
import statsSvg from '../../../assets/svg/stats.svg';
import teamSvg from '../../../assets/svg/team.svg';
import gamesSvg from '../../../assets/svg/games-menu.svg';

import MenuItem from '../../UI/menuItem/MenuItem';
import MenuLogo from '../../UI/menuLogo/MenuLogo';

function Menu(): JSX.Element {
  return (
    <aside className={cl.menuContainer}>
      <MenuLogo />
      <nav>
        <ul className={cl.linkList}>
          <MenuItem icon={homeSvg} alt="home-icon" href="/" />
          <MenuItem icon={bookSvg} alt="book-icon" href="book" />
          <MenuItem icon={gamesSvg} alt="games-icon" href="games" />
          <MenuItem icon={statsSvg} alt="stats-icon" href="stats" />
          <MenuItem icon={teamSvg} alt="team-icon" href="team" />
        </ul>
      </nav>
    </aside>
  );
}

export default Menu;
