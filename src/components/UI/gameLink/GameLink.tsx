import React from 'react';
import { useNavigate } from 'react-router-dom';
import { setIsGameStart } from '../../../store/reducers/gameReducer';
import { update } from '../../../store/reducers/pageTitleReducer';
import { EPageUrls } from '../../../types/pageTitleTypes';
import { useAppDispatch } from '../../../utils/helpers/appHooks';
import cl from './GameLink.module.scss';

interface IProps {
  title: string;
  gameLink: string;
}

function GameLink({ title, gameLink }: IProps): JSX.Element {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  return (
    <button
      className={cl.button}
      type="button"
      onClick={() => {
        dispatch(setIsGameStart(true));
        setTimeout(() => {
          navigate(`/${EPageUrls.games}/${gameLink}`);
          dispatch(update(title));
        }, 1000);
      }}
    >
      {title}
    </button>
  );
}

export default GameLink;
