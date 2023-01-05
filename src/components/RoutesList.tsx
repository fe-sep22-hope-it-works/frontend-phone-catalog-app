import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { AccessoriesPage } from './Pages/AccessoriesPage';
import { ContactsPage } from './Pages/ContactsPage';
import { FavouritesPage } from './Pages/FavouritesPage';
import { GitHubPage } from './Pages/GitHubPage';
import { HomePage } from './Pages/HomePage';
import { NotFoundPage } from './Pages/NotFoundPage';
import { PhonesPage } from './Pages/PhonesPage';
import { PurchasesPage } from './Pages/PurchasesPage';
import { RightsPage } from './Pages/RightsPage';
import { TabletsPage } from './Pages/TabletsPage';

export const RoutesList = () => (
  <Routes>
    <Route
      path="/"
      element={<HomePage />}
    />
    <Route
      path="home"
      element={<Navigate to="/" replace />}
    />
    <Route
      path="phones"
      element={<PhonesPage />}
    />
    <Route
      path="phones/:phoneId"
      element={<PhonesPage />}
    />
    <Route
      path="tablets"
      element={<TabletsPage />}
    />
    <Route
      path="accessories"
      element={<AccessoriesPage />}
    />
    <Route
      path="github"
      element={<GitHubPage />}
    />
    <Route
      path="contacts"
      element={<ContactsPage />}
    />
    <Route
      path="rights"
      element={<RightsPage />}
    />
    <Route
      path="favourites"
      element={<FavouritesPage />}
    />
    <Route
      path="purchases"
      element={<PurchasesPage />}
    />
    <Route
      path="*"
      element={<NotFoundPage />}
    />
  </Routes>
);
