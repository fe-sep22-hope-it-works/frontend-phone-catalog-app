import React from 'react';
import { Breadcrumbs } from '../Breadcrumbs';

export const AccessoriesPage = () => (
  <div className="accessories-page page">
    <Breadcrumbs
      breads={[
        { title: 'home', path: '/' },
        { title: 'Accessories', path: '/accessories' },
      ]}
    />
    <h1 className="page-title">Will be added soon</h1>
    <div className="page__awaitPicture" />
  </div>
);
