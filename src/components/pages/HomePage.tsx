import React from 'react';
import '../../styles/page-title.scss';
import { Card } from '../Card';
import { Slider } from '../Slider/Slider';

export const HomePage = () => {
  return (
    <div className="home-page">
      <div className="home-page__container">
        <h1 className="page-title home-page__title">
          Welcome to Nice Gadgets store!
        </h1>
        <Slider />
        <Card />
      </div>
    </div>
  );
};
