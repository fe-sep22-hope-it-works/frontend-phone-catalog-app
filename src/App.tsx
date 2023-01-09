import React, { useEffect, useState } from 'react';
import './App.scss';
import { getAllPhones } from './components/api/phones';
import { Card } from './components/Card';
import { Footer } from './components/Footer';
import { Header } from './components/Header/Header';
import { ProductsList } from './components/ProductsList';
import { RoutesList } from './components/RoutesList';
import { SortBy } from './types/SortBy';

export function App() {
  const [burgerMenuStatus, isBurgerMenu] = useState(false);

  const getPhonesFromServer = async () => {
    const phonesFromServer = await getAllPhones(SortBy.ALPHABETCALLY);

    return phonesFromServer;
  };

  useEffect(() => {
    getPhonesFromServer();
  }, []);

  return (
    <div className="app">
      <Header
        burgerMenu={burgerMenuStatus}
        isBurgerMenu={isBurgerMenu}
      />
      <RoutesList />
      <Card />

      <ProductsList />

      <Footer />
    </div>
  );
}

export default App;
