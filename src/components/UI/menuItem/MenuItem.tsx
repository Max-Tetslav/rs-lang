import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import cl from './MenuItem.module.scss';
import { update } from '../../../store/reducers/pageTitleReducer';
import { useAppDispatch } from '../../../utils/helpers/appHooks';
import getPageTitle from '../../../utils/helpers/getPageTitle';
import { EPageUrls } from '../../../types/pageTitleTypes';
import { updateLevel, updatePage } from '../../../store/reducers/gameReducer';

interface IProps {
  icon: string;
  alt: string;
  href: string;
}

function MenuItem({ icon, alt, href }: IProps): JSX.Element {
  const dispatch = useAppDispatch();
  const [isActive, setIsActive] = useState<boolean | null>(null);
  const location = useLocation().pathname === '/' ? '/' : useLocation().pathname.split('/');

  useEffect(() => {
    if (href === location || location.includes(href)) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }, [location, isActive]);

  return (
    <li className={isActive === true ? [cl.menuItem, cl.paintedMenuItem].join(' ') : [cl.menuItem].join(' ')}>
      <Link
        to={href}
        onClick={() => {
          if (href === EPageUrls.book) {
            dispatch(updateLevel(0));
            dispatch(updatePage(0));
          }
          dispatch(update(getPageTitle(href)));
        }}
      >
        <img className={cl.icon} src={icon} alt={alt} />
      </Link>
    </li>
  );
}

export default MenuItem;
