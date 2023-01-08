import React, { useEffect } from 'react';
import './App.scss';
import { getAllPhones } from './components/api/phones';
import { Footer } from './components/Footer';
import { Header } from './components/Header/Header';
import { RoutesList } from './components/RoutesList';
import { SortBy } from './types/SortBy';

export function App() {
  const getPhonesFromServer = async () => {
    const phonesFromServer = await getAllPhones(SortBy.ALPHABETCALLY);

    return phonesFromServer;
  };

  useEffect(() => {
    getPhonesFromServer();
  }, []);

  return (
    <div className="app">
      <Header />
      <RoutesList />
      <Footer />
    </div>
  );
}

export default App;
