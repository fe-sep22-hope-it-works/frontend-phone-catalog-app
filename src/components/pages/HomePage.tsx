import React from 'react';
import '../../styles/page-title.scss';
import { HotPrices } from '../HotPrices';
import { NewPhones } from '../NewPhones';
import { Slider } from '../Slider/Slider';

export const HomePage = () => {
  return (
    <div className="home-page">
      <div className="home-page__container">
        <h1 className="page-title home-page__title">
          Welcome to Nice Gadgets store!
        </h1>
        <Slider />

        <NewPhones />
        <HotPrices />
      </div>
    </div>
  );
};
