import React from 'react';
import img from '../../img/card-images/iphone.svg';

export const CartItem: React.FC = () => {
  return (
    <div className="cart__item">
      <div className="cart__item__title">
        <button
          type="button"
          className="cart__item__title__button"
          aria-label="Save"
        />

        <img
          src={img}
          alt="iPhone 11 Pro Max"
          className="cart__item__title__image"
        />

        <div className="cart__item__title__text">
          Title
        </div>
      </div>

      <div className="cart__item__price">
        <div className="cart__item__price__quantity">
          <button
            type="button"
            aria-label="Save"
            className="
              cart__item__price__quantity__button
              cart__item__price__quantity__button__decrease
            "
          >
            -
          </button>

          <div className="cart__item__price__quantity__text">1</div>

          <button
            type="button"
            aria-label="Save"
            className="
              cart__item__price__quantity__button
              cart__item__price__quantity__button__increase
            "
          >
            +
          </button>
        </div>

        <div className="cart__item__price__text">
          $999
        </div>
      </div>
    </div>
  );
};
