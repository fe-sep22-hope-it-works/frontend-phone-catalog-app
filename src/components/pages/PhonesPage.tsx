import React from 'react';
import '../../styles/page-title.scss';
import { ProductsList } from '../ProductsList';

export const PhonesPage = () => (
  <>
    <div className="phones-page page">
      <div
        className="phones-page__container"
      >
        <ProductsList />
      </div>
    </div>
  </>
);
