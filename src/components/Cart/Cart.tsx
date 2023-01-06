import React from 'react';
import { Link } from 'react-router-dom';
import { CartItem } from '../CartItem';

export const Cart: React.FC = () => {
  return (
    <div className="cart">
      <Link to="/">
        <div className="cart__back">
          <button
            type="button"
            id="back__button"
            className="cart__back__button"
            aria-label="Save"
          />

          <label htmlFor="back__button" className="cart__back__text">
            Back
          </label>
        </div>
      </Link>

      <h1 className="cart__title">Cart</h1>

      <div className="cart__items">
        <CartItem />
        <CartItem />
      </div>

      <div className="cart__total">
        <p className="cart__total__price">$1998</p>
        <p className="cart__total__text">Total for 2 items</p>

        <button type="button" className="cart__total__button">
          Checkout
        </button>
      </div>
    </div>
  );
};
