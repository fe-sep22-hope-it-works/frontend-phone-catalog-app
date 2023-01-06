import React from 'react';
import '../../styles/page-title.scss';
import { Header } from '../Header/Header';
import { ProductsList } from '../ProductsList';

export const AccessoriesPage = () => (
  <>
    <Header />
    <h1 className="page-title">Accessories Page</h1>
    <ProductsList />
  </>
);
