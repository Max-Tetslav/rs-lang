import React from 'react';
import cl from './Pagination.module.scss';
import PageNumButton from '../../UI/pageNumButton/PageNumButton';

interface IProps {
  setPage: React.Dispatch<React.SetStateAction<number>>;
}

const pagesNum = Array.from(Array(30).keys()).map((item) => item + 1);

function Pagination({ setPage }: IProps): JSX.Element {
  return (
    <div className={cl.container}>
      {pagesNum.map((item) => {
        return <PageNumButton key={item} pageNum={item} clickHandler={setPage} />;
      })}
    </div>
  );
}

export default Pagination;
