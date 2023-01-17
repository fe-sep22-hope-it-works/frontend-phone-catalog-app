import React, { useContext, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';

import { getNewPhones } from '../api/phones';
import { Card } from '../Card';
import { PhoneContext } from '../PhoneContext/PhoneContext';

import 'swiper/scss';
import 'swiper/css/navigation';

export const NewPhones: React.FC = () => {
  const { phones, setPhones } = useContext(PhoneContext);

  const getNewPhonesFromServer = async () => {
    const newPhonesFromServer = await getNewPhones();

    setPhones(newPhonesFromServer);
  };

  useEffect(() => {
    getNewPhonesFromServer();
  }, []);

  return (
    <section className="new-phones">
      <div className="new-phones__container">
        <div className="new-phones__title">
          <h2 className="new-phones__title-text">Brand new models</h2>

          <div className="new-phones__title-buttons">
            <button
              type="button"
              className="new-phones__title-buttons-swiper-button-prev"
              aria-label="Save"
            />
            <button
              type="button"
              className="new-phones__title-buttons-swiper-button-next"
              aria-label="Save"
            />
          </div>
        </div>
        <div className="new-phones__swiper-container">
          <Swiper
            autoHeight
            navigation={{
              nextEl: '.new-phones__title-buttons-swiper-button-next',
              prevEl: '.new-phones__title-buttons-swiper-button-prev',
            }}
            modules={[Navigation]}
            spaceBetween={16}
            slidesPerView="auto"
            scrollbar={{ draggable: true }}
          >
            <div className="new-phones__items">
              {phones.map((phone) => (
                <SwiperSlide key={phone.id}>
                  <Card phone={phone} />
                </SwiperSlide>
              ))}
            </div>
          </Swiper>
        </div>
      </div>
    </section>
  );
};
