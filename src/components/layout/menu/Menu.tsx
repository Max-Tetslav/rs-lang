import React from 'react';
import MenuBtn from '../../UI/menuBtn/MenuBtn';
import cl from './Menu.module.scss';

export default function Menu(){
  return (
    <aside className={cl.menuContainer}>
      <MenuBtn/>
      <nav>
        <ul>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </nav>
    </aside>
  )
}