/* eslint-disable react/button-has-type */
/* eslint-disable max-len */
import React, { useContext, useState } from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import '../../App.scss';
import img from '../../img/card-images/iphone.svg';
import heart from '../../img/card-images/Vector.svg';
import likeHeart from '../../img/card-images/favouriteHeart.svg';
import { Phone } from '../../types/Phone';
import { PhoneContext } from '../PhoneContext/PhoneContext';

type Props = {
  phone: Phone,
};

export const Card: React.FC<Props> = ({ phone }) => {

  const [isActiveToCard, setIsActiveToCard] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  const { setCartPhones } = useContext(PhoneContext);

  const handleCardButton = () => {
    setIsActiveToCard(!isActiveToCard);

    setCartPhones(prevPhones => [...prevPhones, phone]);
  };

  const handleFavButton = () => setIsFavorite(!isFavorite);

  const {
    name,
    fullPrice,
    price,
    screen,
    capacity,
    ram,
  } = phone;

  const [isFavorite, setIsFavorite] = useState(false);

  const { saveCartPhones, cartPhones } = useContext(PhoneContext);

  const isAdded = cartPhones.find(cart => cart === id);

  const handleCardButton = (phoneTo: Phone) => {
    saveCartPhones(phoneTo.id);
  };

  const handleFavButton = () => setIsFavorite(!isFavorite);

  return (
    <section className="card grid__item-tablet-1-4">
      <img
        src={img}
        alt={name}
        className="card__img"
      />

      <Link
        to="/phones"
        className="card__name"
      >
        {name}
      </Link>

      <div className="card__price">
        <p className="card__price--new">{price}</p>
        <p className="card__price--old">{fullPrice}</p>
      </div>

      <div className="card__separator" />

      <div className="card__params">
        <div className="card__params--container">
          <p className="card__params--text">Screen</p>
          <p className="card__params--val">{screen}</p>
        </div>
        <div className="card__params--container">
          <p className="card__params--text">Capacity</p>
          <p className="card__params--val">{capacity}</p>
        </div>
        <div className="card__params--container">
          <p className="card__params--text">RAM</p>
          <p className="card__params--val">{ram}</p>
        </div>
      </div>

      <div className="card__buy">
        <button
          className={classNames('card__buy--add', {
            'card__buy--add-active': isAdded,
          })}
          onClick={() => handleCardButton(phone)}
        >
          {
            !isAdded
              ? 'Add to cart'
              : 'Added'
          }
        </button>

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
