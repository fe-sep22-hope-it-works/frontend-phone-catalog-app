import React, { useState } from 'react';
import './App.scss';
// import { Card } from './components/Card';
// import { getPhoneImage, getAllPhones } from './components/api/phones';
import { Footer } from './components/Footer';
import { Header } from './components/Header/Header';
import { RoutesList } from './components/RoutesList';

export function App() {
  const [burgerMenuStatus, isBurgerMenu] = useState(false);

  //   const getImageFromServer = async () => {
  //     const imageFromServer = await getPhoneImage(34, 2);

  //     return imageFromServer?.slice(22);
  //   };

  // useEffect(() => {
  //   getImageFromServer();
  // }, []);

  return (
    <div className="app">
      <Header burgerMenu={burgerMenuStatus} isBurgerMenu={isBurgerMenu} />
      <RoutesList />
      <Footer />
    </div>
  );
}
