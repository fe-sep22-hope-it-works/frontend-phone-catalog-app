import React from 'react';
import '../../styles/page-title.scss';
import { Card } from '../Card';

export const HomePage = () => {
  return (
    <div className="home-page">
      <div className="welcome">
        <h1 className="welcome__title">Welcome to Nice Gadgets store!</h1>
        <Card />
      </div>
    </div>
  );
};
