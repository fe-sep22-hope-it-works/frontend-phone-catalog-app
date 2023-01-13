import React from 'react';
import '../../styles/page-title.scss';
import { Breadcrumbs } from '../Breadcrumbs';

export const AccessoriesPage = () => (
  <>
    <h1 className="page-title">Accessories Page</h1>
    <Breadcrumbs
      breads={[
        { title: 'home', path: '/' },
        { title: 'Accessories', path: '/accessories' },
      ]}
    />
  </>

);
