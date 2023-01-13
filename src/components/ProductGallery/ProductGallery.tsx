/* eslint-disable react/no-array-index-key */
/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Thumbs } from 'swiper';

import 'swiper/scss';
import 'swiper/scss/thumbs';
import s from './ProductGallery.module.scss';

type Props = {
  images: string[] | undefined,
};

export const ProductGallery: React.FC<Props> = ({ images }) => {
  const [activeThumb, setActiveThumb] = useState<SwiperCore>();

  return (
    <div className={s.gallery}>
      <Swiper
        className={s.product__image_slider}
        modules={[Thumbs]}
        spaceBetween={50}
        slidesPerView={1}
        thumbs={{
          swiper: activeThumb && !activeThumb.destroyed ? activeThumb : null,
        }}
      >
        {images?.map((image, i) => (
          <SwiperSlide key={i}>
            <img
              src={require(`../../${image}`)}
              alt={image}
              className={s.product__image_img}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <Swiper
        watchSlidesProgress
        onSwiper={setActiveThumb}
        className={s.product__image_slider_thumbs}
        modules={[Thumbs]}
        spaceBetween={10}
        slidesPerView={5}
      >
        {images?.map((image, i) => (
          <SwiperSlide
            key={i}
            className={s.product__slider_thumb}
          >
            <img
              src={require(`../../${image}`)}
              alt={image}
              style={{
                height: '100%',
                width: '100%',
                objectFit: 'contain',
              }}
            />
          </SwiperSlide>
        ))}

      </Swiper>
    </div>
  );
};
