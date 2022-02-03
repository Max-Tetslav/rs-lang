import React from 'react';
import { Link } from 'react-router-dom';
import cl from './MenuItem.module.scss';

interface IProps {
  icon: string;
  alt: string;
  href: string;
}

function MenuItem({ icon, alt, href }: IProps): JSX.Element {
  return (
    <li className={cl.menuItem}>
      <Link to={href}>
        <img className={cl.icon} src={icon} alt={alt} />
      </Link>
    </li>
  );
}

export default MenuItem;
