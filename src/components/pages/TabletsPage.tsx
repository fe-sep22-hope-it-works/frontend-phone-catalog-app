import React from 'react';
import '../../styles/page-title.scss';
import { Breadcrumbs } from '../Breadcrumbs';

export const TabletsPage = () => (
  <>
    <h1 className="page-title">Tablets Page</h1>
    <Breadcrumbs
      breads={[
        { title: 'home', path: '/' },
        { title: 'Tablets', path: '/tablets' },
      ]}
    />
  </>
);
