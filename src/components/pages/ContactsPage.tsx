import React from 'react';
import { Breadcrumbs } from '../Breadcrumbs';

export const ContactsPage = () => (
  <div className="contacts-page">
    <div className="contacts-page__container">
      <Breadcrumbs
        breads={[
          { title: 'home', path: '/' },
          { title: 'Contacts', path: '/contacts' },
        ]}
      />
      <h1 className="page-title contacts-page__title">Our contacts</h1>
      <div className="contacts-page__content">
        <div className="contacts-page__item">
          <h3 className="contacts-page__person">Baranov Vadym</h3>
          <a
            href="https://www.linkedin.com/in/vadym-baranov/"
            className="contacts-page__linkedin"
          >
            LinkedIn
          </a>
          <a
            href="mailto:vadym.baranov@gmail.com"
            className="contacts-page__email"
          >
            vadym.baranov@gmail.com
          </a>
        </div>
        <div className="contacts-page__item">
          <h3 className="contacts-page__person">Bassarab Andrii</h3>
          <a
            href="https://www.linkedin.com/in/andrii-bassarab/"
            className="contacts-page__linkedin"
          >
            LinkedIn
          </a>
          <a
            href="mailto:andrijbassarab@gmail.com"
            className="contacts-page__email"
          >
            andrijbassarab@gmail.com
          </a>
        </div>
        <div className="contacts-page__item">
          <h3 className="contacts-page__person">Olin Andrey</h3>
          <a
            href="https://www.linkedin.com/in/andrii-olin-13820a25b/"
            className="contacts-page__linkedin"
          >
            LinkedIn
          </a>
          <a
            href="mailto:andrii.olin@gmail.com"
            className="contacts-page__email"
          >
            andrii.olin@gmail.com
          </a>
        </div>
        <div className="contacts-page__item">
          <h3 className="contacts-page__person">Skladnik Illia</h3>
          <a
            href="https://www.linkedin.com/in/illia-skladnik-98635425b/"
            className="contacts-page__linkedin"
          >
            LinkedIn
          </a>
          <a
            href="mailto:scladnik@gmail.com"
            className="contacts-page__email"
          >
            scladnik@gmail.com
          </a>
        </div>
        <div className="contacts-page__item">
          <h3 className="contacts-page__person">Stryzhavchuk Oleksandr</h3>
          <a
            href="https://www.linkedin.com/in/oleksandr-stryzhavchuk/"
            className="contacts-page__linkedin"
          >
            LinkedIn
          </a>
          <a
            href="mailto:sstrizhavchuk@gmail.com"
            className="contacts-page__email"
          >
            sstrizhavchuk@gmail.com
          </a>
        </div>
      </div>
    </div>
  </div>
);
