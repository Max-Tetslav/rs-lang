import React from 'react';
import { Link } from 'react-router-dom';
import cl from './MenuItem.module.scss';
import { update } from '../../../store/reducers/pageTitleReducer';
import { useAppDispatch } from '../../../utils/helpers/appHooks';
import getPageTitle from '../../../utils/helpers/getPageTitle';

interface IProps {
  icon: string;
  alt: string;
  href: string;
}

function MenuItem({ icon, alt, href }: IProps): JSX.Element {
  const dispatch = useAppDispatch();

  return (
    <li className={cl.menuItem}>
      <Link
        to={href}
        onClick={() => {
          dispatch(update(getPageTitle(href)));
        }}
      >
        <img className={cl.icon} src={icon} alt={alt} />
      </Link>
    </li>
  );
}

export default MenuItem;
