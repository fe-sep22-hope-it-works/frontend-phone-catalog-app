import React from 'react';
import { Header } from '../Header';
import '../../styles/page-title.scss';

export const HomePage = () => {
  return (
    <div className="home-page">
      <Header />
      <h1 className="page-title">Welcome to Nice Gadgets store!</h1>
    </div>
  );
};
