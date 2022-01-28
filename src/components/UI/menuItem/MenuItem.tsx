import React from 'react';
import { Link } from 'react-router-dom';
import cl from './MenuItem.module.scss';

interface IProps {icon: string, alt: string, href: string}

const MenuItem: React.FC<IProps> = (props: IProps) => {
  return (
    <li className={cl.menuItem}>
      <Link to={props.href}>
        <img
          className={cl.icon}
          src={props.icon}
          alt={props.alt}
        />
      </Link>
    </li>
  );
}

export default MenuItem;
