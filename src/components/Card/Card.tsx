/* eslint-disable max-len */
import React, { useState } from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import '../../App.scss';
import img from '../../img/card-images/iphone.svg';
import heart from '../../img/card-images/Vector.svg';
import likeHeart from '../../img/card-images/favouriteHeart.svg';

export const Card: React.FC = () => {
  const [isActiveToCard, setIsActiveToCard] = useState(false);
  const handleCardButton = () => setIsActiveToCard(!isActiveToCard);
  const [isFavorite, setIsFavorite] = useState(false);
  const handleFavButton = () => setIsFavorite(!isFavorite);

  return (
    <section className="card">
      <img
        src={img}
        alt="iPhone 11 Pro Max"
        className="card__img"
      />

      <Link
        to="/phones"
        className="card__name"
      >
        Apple iPhone Xs 64GB Silver (iMT9G2FS/A)
      </Link>

      <div className="card__price">
        <p className="card__price--new">$799</p>
        <p className="card__price--old">$899</p>
      </div>

      <div className="card__separator" />

      <div className="card__params">
        <div className="card__params--container">
          <p className="card__params--text">Screen</p>
          <p className="card__params--val">5.8” OLED</p>
        </div>
        <div className="card__params--container">
          <p className="card__params--text">Capacity</p>
          <p className="card__params--val">64 GB</p>
        </div>
        <div className="card__params--container">
          <p className="card__params--text">RAM</p>
          <p className="card__params--val">4 GB</p>
        </div>
      </div>

      <div className="card__buy">
        <Link
          to="/purchases"
          className={classNames('card__buy--add', {
            'card__buy--add-active': isActiveToCard,
          })}
          onClick={handleCardButton}
        >
          {!isActiveToCard ? 'Add to cart' : 'Added'}
        </Link>

        <Link
          to="/favourites"
          className={classNames('card__buy--heart', {
            'card__buy--heart-active': isFavorite,
          })}
          onClick={handleFavButton}
        >
          <img
            src={!isFavorite ? heart : likeHeart}
            alt="Phone logo"
            className="heart"
          />
        </Link>
      </div>
    </section>
  );
};
