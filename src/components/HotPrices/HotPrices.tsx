/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';

import { getHotPricesPhones } from '../api/phones';
import { Card } from '../Card';
import { Phone } from '../../types/Phone';

import 'swiper/scss';
import 'swiper/css/navigation';

export const HotPrices: React.FC = () => {
  const [discountedPhones, setDiscountedPhones] = useState<Phone[]>([]);
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);

  const getPhonesWithDiscountFromServer = async () => {
    const phonesFromServer = await getHotPricesPhones();

    setDiscountedPhones(phonesFromServer);
  };

  useEffect(() => {
    getPhonesWithDiscountFromServer();
  }, []);

  useEffect(() => {
    window.addEventListener('resize', () => {
      setInnerWidth(window.innerWidth);
    });

    return () => {
      window.removeEventListener('resize', () => {
        setInnerWidth(window.innerWidth);
      });
    };
  }, [innerWidth]);

  return (
    <section className="hot-prices">
      <div className="hot-prices__container">
        <div className="hot-prices__title">
          <h2 className="hot-prices__title-text">Hot prices</h2>

          <div className="hot-prices__title-buttons">
            <button
              type="button"
              className="hot-prices__title-buttons-swiper-button-prev"
              aria-label="Save"
            />
            <button
              type="button"
              className="hot-prices__title-buttons-swiper-button-next"
              aria-label="Save"
            />
          </div>
        </div>

        {innerWidth >= 1200 ? (
          <div className="hot-prices__swiper-container">
            <Swiper
              slidesPerView={4}
              autoHeight
              navigation={{
                nextEl: '.hot-prices__title-buttons-swiper-button-next',
                prevEl: '.hot-prices__title-buttons-swiper-button-prev',
              }}
              spaceBetween={16}
              modules={[Navigation]}
            >
              <div className="hot-prices__items">
                {discountedPhones.map((phone) => (
                  <SwiperSlide key={phone.id}>
                    <Card phone={phone} />
                  </SwiperSlide>
                ))}
              </div>
            </Swiper>
          </div>
        ) : (
          <div className="hot-prices__swiper-container">
            <Swiper
              slidesPerView={3}
              autoHeight
              navigation={{
                nextEl: '.hot-prices__title-buttons-swiper-button-next',
                prevEl: '.hot-prices__title-buttons-swiper-button-prev',
              }}
              spaceBetween={16}
              modules={[Navigation]}
            >
              <div className="hot-prices__items">
                {discountedPhones.map((phone) => (
                  <SwiperSlide key={phone.id}>
                    <Card phone={phone} />
                  </SwiperSlide>
                ))}
              </div>
            </Swiper>
          </div>
        )}
      </div>
    </section>
  );
};
