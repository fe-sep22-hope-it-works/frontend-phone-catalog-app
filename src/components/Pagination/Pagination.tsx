import React from 'react';
import classNames from 'classnames';
import { getNumbers } from '../../utils/getNumbers';

interface Props {
  countOfItems: number,
  perPage: number,
  currentPage: number,
  onPageChange: (pageNumber: number) => void
}

export const Pagination: React.FC<Props> = ({
  countOfItems,
  perPage,
  currentPage,
  onPageChange,
}) => {
  const CountOfPages = Math.ceil(countOfItems / perPage);

  const pages = getNumbers(1, CountOfPages);

  const isFirstPage = currentPage === 1;

  const isLastPage = currentPage === CountOfPages;

  return (
    <ul className="pagination">
      <li>
        <button
          type="button"
          disabled={isFirstPage}
          className={classNames(
            'pagination__button pagination__link',
            { 'pagination__button-isDisabled': isFirstPage },
          )}
          onClick={() => onPageChange(currentPage - 1)}
        >
          {'<'}
        </button>
      </li>

      <li className="pagination__links">
        {pages.map(pageNumber => (
          <a
            href="/"
            className={classNames(
              'pagination__link',
              { 'pagination__link-isActive': currentPage === pageNumber },
            )}
            onClick={(event) => {
              onPageChange(pageNumber);
              event?.preventDefault();
            }}
          >
            {pageNumber}
          </a>
        ))}
      </li>

      <li>
        <button
          type="button"
          disabled={isLastPage}
          className={classNames(
            'pagination__button pagination__link',
            { 'pagination__button-isDisabled': isLastPage },
          )}
          onClick={() => onPageChange(currentPage + 1)}
        >
          {'>'}
        </button>
      </li>
    </ul>
  );
};
