import React, { useEffect } from 'react';
import './App.scss';
import { getPhoneImage } from './components/api/phones';
import { Footer } from './components/Footer';
import { Header } from './components/Header/Header';
import { RoutesList } from './components/RoutesList';

export function App() {
  const getImageFromServer = async () => {
    const imageFromServer = await getPhoneImage(14);

    return imageFromServer;
  };

  useEffect(() => {
    getImageFromServer();
  }, []);

  return (
    <div className="app">
      <Header />
      <img src="" alt="" />
      <RoutesList />
      <Footer />
    </div>
  );
}
