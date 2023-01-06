import React, { useState } from 'react';
import { Pagination } from '../Pagination';

export const ProductsList: React.FC = () => {
  const [perPage, setPerPage] = useState(20);
  const [currentPage, setCurrentPage] = useState(1);

  const products: number[] // type will be changed after getting products
    = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]; // it`s a temp array, must be changed

  const perPageOptions = [3, 5, 10, 20];

  const firstPageItemIndex = currentPage * perPage - perPage;

  const lastPageItemIndex = perPage * currentPage;

  const visibleItems = products.slice(firstPageItemIndex, lastPageItemIndex);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setPerPage(Number(event.target.value));
  };

  return (
    <>
      <div className="perPage_form">
        <select
          data-cy="perPageSelector"
          id="perPageSelector"
          className="form-control"
          value={perPage}
          onChange={handleChange}
        >
          {perPageOptions.map(option => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select>
      </div>
      {visibleItems.map(product => product)}

      <Pagination
        countOfItems={products.length}
        perPage={perPage}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
    </>
  );
};
