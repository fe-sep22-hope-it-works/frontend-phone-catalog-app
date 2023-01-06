import React from 'react';
import '../../App.scss';
import img from '../../img/card-images/image.svg';
import heart from '../../img/card-images/Vector.svg';

export const Card: React.FC = () => {
  return (
    <section className="card">
      <img
        src={img}
        alt="iPhone 11 Pro Max"
        className="card__img"
      />

      <a href="/" className="card__name">
        Apple iPhone 11 Pro Max 512GB Midnight Green (iMT9G2FS/A)
      </a>

      <div className="card__price">
        <p className="card__price--new">$849</p>
        <p className="card__price--old">$1199</p>
      </div>

      <div className="card__separator" />

      <div className="card__params">
        <div className="card__params--container">
          <p className="card__params--text">Screen</p>
          <p className="card__params--val">6.5” OLED</p>
        </div>
        <div className="card__params--container">
          <p className="card__params--text">Capacity</p>
          <p className="card__params--val">512 GB</p>
        </div>
        <div className="card__params--container">
          <p className="card__params--text">RAM</p>
          <p className="card__params--val">4 GB</p>
        </div>
      </div>

      <div className="card__buy">
        <a href="/" className="card__buy--add">
          {' '}
          Add to cart
          {' '}
        </a>

        <a href="/" className="card__buy--heart">
          <img src={heart} alt="heart_icon" className="card__icon" />
        </a>
      </div>
    </section>
  );
};
