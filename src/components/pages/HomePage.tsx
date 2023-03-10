import React from 'react';
import { Categories } from '../Categories/Categories';
import { NewPhones } from '../NewPhones';
import { HotPrices } from '../HotPrices';
import { Slider } from '../Slider/Slider';

export const HomePage = () => {
  return (
    <div className="home-page page">
      <div className="home-page__container">
        <h1 className="page-title home-page__title">
          Welcome to Nice Gadgets store!
        </h1>
        <Slider />
        <NewPhones />
        <Categories />
        <HotPrices />
      </div>
    </div>
  );
};
