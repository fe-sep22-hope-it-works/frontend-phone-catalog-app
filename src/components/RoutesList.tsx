import { Navigate, Route, Routes } from 'react-router-dom';
import { AccessoriesPage } from './pages/AccessoriesPage';
import { ContactsPage } from './pages/ContactsPage';
import { FavouritesPage } from './pages/FavouritesPage';
import { GitHubPage } from './pages/GitHubPage';
import { HomePage } from './pages/HomePage';
import { NotFoundPage } from './pages/NotFoundPage';
import { PhonesPage } from './pages/PhonesPage';
import { PurchasesPage } from './pages/PurchasesPage';
import { RightsPage } from './pages/RightsPage';
import { TabletsPage } from './pages/TabletsPage';

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
