import React from 'react';
import '../../styles/page-title.scss';
import { Breadcrumbs } from '../Breadcrumbs';

export const RightsPage = () => {
  return (
    <>
      <Breadcrumbs
        breads={[
          { title: 'home', path: '/' },
          { title: 'Rights', path: '/rights' },
        ]}
      />
      <h1 className="page-title">Rights Page</h1>
    </>
  );
};
