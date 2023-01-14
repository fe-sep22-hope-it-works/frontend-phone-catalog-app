import React from 'react';
import { Breadcrumbs } from '../Breadcrumbs';

export const TabletsPage = () => (
  <>
    <div className="tablets-page page">
      <Breadcrumbs
        breads={[
          { title: 'home', path: '/' },
          { title: 'Tablets', path: '/tablets' },
        ]}
      />
      <h1 className="page-title">Will be added soon</h1>
      <div className="page__awaitPicture" />
    </div>
  </>
);
