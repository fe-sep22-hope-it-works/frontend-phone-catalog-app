import React from 'react';
import '../../styles/page-title.scss';
import { Breadcrumbs } from '../Breadcrumbs';

export const ContactsPage = () => {
  return (
    <>
      <Breadcrumbs
        breads={[
          { title: 'home', path: '/' },
          { title: 'Contacts', path: '/contacts' },
        ]}
      />
      <h1 className="page-title">Contacts Page</h1>
    </>
  );
};
