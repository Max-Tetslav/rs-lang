import React from 'react';
import { updatePage } from '../../../store/reducers/gameReducer';
import { useAppDispatch } from '../../../utils/helpers/appHooks';
import cl from './PageNumButton.module.scss';

interface IProps {
  pageNum: number;
  clickHandler: React.Dispatch<React.SetStateAction<number>>;
}

function PageNumButton({ pageNum, clickHandler }: IProps): JSX.Element {
  const dispatch = useAppDispatch();

  return (
    <button
      className={cl.button}
      onClick={() => {
        dispatch(updatePage(pageNum - 1));
        clickHandler(pageNum - 1);
      }}
      type="button"
    >
      {pageNum}
    </button>
  );
}

export default PageNumButton;
