import React from 'react';
import { Breadcrumbs } from '../Breadcrumbs';

export const RightsPage = () => (
  <div className="rights-page page">
    <Breadcrumbs
      breads={[
        { title: 'home', path: '/' },
        { title: 'Rights', path: '/rights' },
      ]}
    />
    <h1 className="page-title rights-page__title">Rights Page</h1>
    <p className="rights-page__text">
      We haven&apos;t decided what content to write here yet,
      but you can just enjoy shopping now
    </p>
    <div className="rights-page__img" />
  </div>
);
