import React from 'react';
import '../../styles/page-title.scss';
import { Header } from '../Header/Header';
import { ProductsList } from '../ProductsList';

export const PhonesPage = () => (
  <>
    <Header />
    <h1 className="page-title">Phones Page</h1>
    <ProductsList />
  </>
);
