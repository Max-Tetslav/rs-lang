// код взят и адаптирован отсюда https://www.freecodecamp.org/news/build-a-custom-pagination-component-in-react/

import React from 'react';
import { usePagination, DOTS } from '../../../hooks/usePagination';
import cl from './Pagination.module.scss';

interface IProps {
  onPageChange: React.Dispatch<React.SetStateAction<number>>;
  totalCount: number;
  siblingCount: number;
  currentPage: number;
  pageSize: number;
}

function Pagination({ onPageChange, totalCount, siblingCount = 2, currentPage, pageSize }: IProps): JSX.Element {
  const paginationRange = usePagination(totalCount, pageSize, siblingCount, currentPage);
  const lastPage = (paginationRange as (number | string)[])[(paginationRange as (number | string)[]).length - 1];

  function onNext() {
    onPageChange(currentPage - 1 + 1);
  }

  function onPrevious() {
    onPageChange(currentPage - 1 - 1);
  }

  return (
    <ul className={[cl.paginationContainer, cl.paginationBar].join(' ')}>
      <li
        className={currentPage === 1 ? [cl.paginationItem, cl.disabled].join(' ') : [cl.paginationItem].join(' ')}
        onClick={onPrevious}
        onKeyPress={() => {}}
        role="menuitem"
      >
        <div className={[cl.arrow, cl.left].join(' ')} />
      </li>
      {(paginationRange as (number | string)[]).map((pageNumber) => {
        if (pageNumber === DOTS) {
          return <li className={[cl.paginationItem, cl.dots].join(' ')}>&#8230;</li>;
        }

        return (
          <li
            className={pageNumber === currentPage ? [cl.paginationItem, cl.selected].join(' ') : [cl.paginationItem].join(' ')}
            onClick={() => onPageChange(Number(pageNumber) - 1)}
            onKeyPress={() => {}}
            role="menuitem"
          >
            {pageNumber}
          </li>
        );
      })}
      <li
        className={currentPage === lastPage ? [cl.paginationItem, cl.disabled].join(' ') : [cl.paginationItem].join(' ')}
        onClick={onNext}
        onKeyPress={() => {}}
        role="menuitem"
      >
        <div className={[cl.arrow, cl.right].join(' ')} />
      </li>
    </ul>
  );
}

export default Pagination;
