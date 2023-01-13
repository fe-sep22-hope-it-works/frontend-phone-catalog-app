import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';

import s from './ProductsSlider.module.scss';
import 'swiper/scss';
import 'swiper/scss/navigation';
import { Card } from '../Card/Card';
import { Phone } from '../../types/Phone';

type Props<T> = {
  products: T[];
  title: string;
};

export const ProductsSlider = <T extends Phone>(
  { products, title }: Props<T>,
) => {
  return (
    <div className={s.slider}>
      <h2 className={s.slider__title}>{title}</h2>
      <Swiper
        modules={[Navigation]}
        navigation
        slidesPerView="auto"
        scrollbar={{ draggable: true }}
        spaceBetween={8}
        className={s.slider__swiper}
      >
        {products.map(phone => (
          <SwiperSlide
            key={phone.id}
            className={s.slider__item}
          >
            <Card
              phone={phone}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
