import React from 'react';
import '../../styles/page-title.scss';
import { Header } from '../Header/Header';
import { ProductsList } from '../ProductsList';

export const TabletsPage = () => (
  <>
    <Header />
    <h1 className="page-title">Tablets Page</h1>
    <ProductsList />
  </>
);
