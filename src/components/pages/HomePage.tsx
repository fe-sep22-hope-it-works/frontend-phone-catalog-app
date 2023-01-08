import React from 'react';
import '../../styles/page-title.scss';
import { Card } from '../Card';

export const HomePage = () => {
  return (
    <div className="home-page">
      <h1 className="page-title">Welcome to Nice Gadgets store!</h1>
      <Card />
    </div>
  );
};
