import React from 'react';
import cl from './PageNumButton.module.scss';

interface IProps {
  pageNum: number;
  clickHandler: React.Dispatch<React.SetStateAction<number>>;
}

function PageNumButton({ pageNum, clickHandler }: IProps): JSX.Element {
  return (
    <button className={cl.button} onClick={() => clickHandler(pageNum - 1)} type="button">
      {pageNum}
    </button>
  );
}

export default PageNumButton;
