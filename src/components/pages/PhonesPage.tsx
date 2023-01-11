import React from 'react';
import '../../styles/page-title.scss';
import { ProductsList } from '../ProductsList';

export const PhonesPage = () => (
  <>
    <div className="phones-page page">
      <div
        className="phones-page__container"
      >
        <h1 className="page-title">Phones Page</h1>
        <ProductsList />
      </div>
    </div>
  </>
);
