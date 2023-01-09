import React, { useEffect } from 'react';
import './App.scss';
import { getPhoneImage } from './components/api/phones';
import { Card } from './components/Card';
import { Footer } from './components/Footer';
import { Header } from './components/Header/Header';
import { ProductsList } from './components/ProductsList';
import { RoutesList } from './components/RoutesList';

export function App() {
  const getImageFromServer = async () => {
    const imageFromServer = await getPhoneImage(34, 2);

    return imageFromServer?.slice(22);
  };

  useEffect(() => {
    getImageFromServer();
  }, []);

  return (
    <div className="app">
      <Header />
      <RoutesList />
      <Card />
      <ProductsList />
      <Footer />
    </div>
  );
}

export default App;
