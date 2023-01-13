/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
/* eslint-disable react/button-has-type */
/* eslint-disable max-len */
import React, { useContext, useEffect, useState } from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import '../../App.scss';
import heart from '../../img/card-images/Vector.svg';
import likeHeart from '../../img/card-images/favouriteHeart.svg';
import { Phone } from '../../types/Phone';
import { PhoneContext } from '../PhoneContext/PhoneContext';
import { getPhoneImage } from '../api/phones';

type Props = {
  phone: Phone,
};

export const Card: React.FC<Props> = ({ phone }) => {
  const {
    id,
    name,
    fullPrice,
    price,
    screen,
    capacity,
    ram,
  } = phone;

  const [photo, setPhoto] = useState('');

  const photoFromServer = async () => {
    const mainPhoto = await getPhoneImage(+id);

    setPhoto(mainPhoto[0]);
  };

  useEffect(() => {
    photoFromServer();
  }, []);

  const {
    saveCartPhones,
    cartPhones,
    saveFavouritePhones,
    favouritePhones,
  } = useContext(PhoneContext);

  const isAdded = cartPhones.find(cart => cart.id === id);
  const isFavourite = favouritePhones.find(cart => cart.id === id);

  const handleCardButton = (phoneTo: Phone) => {
    saveCartPhones(phoneTo);
  };

  const handleFavButton = (phoneTo: Phone) => {
    saveFavouritePhones(phoneTo);
  };

  return (
    <section className="card grid__item-tablet-1-4">
      <Link to={`/phones/${id}`}>
        <img
          src={require(`../../${photo}`)}
          alt={name}
          className="card__img"
        />
      </Link>

      <Link
        to={`/phones/${id}`}
        className="card__name"
      >
        {name}
      </Link>

      <div className="card__price">
        <p className="card__price--new">{`$${price}`}</p>
        <p className="card__price--old">{`$${fullPrice}`}</p>
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

        <button
          className={classNames('card__buy--heart', {
            'card__buy--heart-active': isFavourite,
          })}
          onClick={() => handleFavButton(phone)}
        >
          <img
            src={!isFavourite ? heart : likeHeart}
            alt="Phone logo"
            className="heart"
          />
        </button>
      </div>
    </section>
  );
};
