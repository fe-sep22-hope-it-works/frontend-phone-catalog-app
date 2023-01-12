import React, { useContext, useEffect, useState } from 'react';
import { getAllPhones } from '../api/phones';
import { Card } from '../Card';
import { Pagination } from '../Pagination';
import { PhoneContext } from '../PhoneContext/PhoneContext';
import { SortBy } from '../../types/SortBy';
import { sortOptions } from '../../utils/SortOptions';
import { perPageOptions } from '../../utils/perPageOptions';

export const ProductsList: React.FC = () => {
  const [countOfModels, setCountOfModels] = useState(0);
  const [perPage, setPerPage] = useState(20);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState<SortBy | string>(SortBy.NEWEST);

  const { phones, setPhones } = useContext(PhoneContext);

  const getAllPhonesLength = async () => {
    const allPhonesFromServer = await getAllPhones();

    setCountOfModels(allPhonesFromServer.length);
  };

  useEffect(() => {
    getAllPhonesLength();
  }, []);

  const getPhonesFromServer = async () => {
    const phonesFromServer = await
    getAllPhones(sortBy, currentPage, perPage);

    setPhones(phonesFromServer);
  };

  useEffect(() => {
    getPhonesFromServer();
  }, [currentPage, sortBy, perPage]);

  const handleChangePerPage = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setPerPage(Number(event.target.value));
  };

  const handleChangeSortType = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    setSortBy(event.target.value);
  };

  return (
    <div className="productList">
      <div className="productList__container">
        <h1 className="page-title productList__title">Mobile phones</h1>
        <p className="productList__modelCountText">{`${countOfModels} models`}</p>

        <div className="sortAndPerPageForm sortAndPerPageForm__container">
          <div className="sortAndPerPageForm__sortByForm">
            <p className="
              sortAndPerPageForm__text
              sortAndPerPageForm__sortByForm__text
            "
            >
              Sort by
            </p>

            <select
              className="
                sortAndPerPageForm__options
                sortAndPerPageForm__sortByForm__options
              "
              value={sortBy}
              onChange={handleChangeSortType}
            >
              {sortOptions.map(option => (
                <option
                  className="sortAndPerPageForm__sortByForm__options__option"
                  key={option.value}
                  value={option.value}
                >
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          <div className="sortAndPerPageForm__perPageForm">
            <p
              className="
                sortAndPerPageForm__text
                sortAndPerPageForm__perPageForm__text
              "
            >
              Items on page
            </p>

            <select
              className="
                sortAndPerPageForm__options
                sortAndPerPageForm__perPageForm__options
              "
              value={perPage}
              onChange={handleChangePerPage}
            >
              {perPageOptions.map(option => (
                <option
                  className="sortAndPerPageForm__perPageForm__options__option"
                  key={option}
                  value={option}
                >
                  {option}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="grid">
          {phones.map((phone) => (
            <Card
              key={phone.id}
              phone={phone}
            />
          ))}

        </div>

        <Pagination
          countOfItems={countOfModels}
          perPage={perPage}
          currentPage={currentPage}
          onPageChange={setCurrentPage}
        />
      </div>
    </div>
  );
};
