import React, { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { CartItem } from '../CartItem';
import { Phone } from '../../types/phones';

export const Cart: React.FC = () => {
  const [currentCartProducts, setCurrentCartProducts] = useState<any>([]);

  // temp array
  const cartProducts = [
    {
      id: 1,
      price: 999,
      quantity: 1,
    },
    {
      id: 2,
      price: 900,
      quantity: 1,
    },
  ];
  // temp array

  useEffect(() => setCurrentCartProducts(cartProducts), []);

  const ChangeProductQuantity = (productToChange: Phone, newQuantity = 1) => {
    const newCartProducts = currentCartProducts.map((product: any) => {
      if (product.id === productToChange.id) {
        const changedProduct = {
          ...productToChange,
          quantity: newQuantity,
        };

        return changedProduct;
      }

      return {
        ...product,
        quantity: product.quantity || 1,
      };
    });

    setCurrentCartProducts(newCartProducts);
  };

  const removeItem = (id: number) => {
    setCurrentCartProducts(currentCartProducts
      .filter((product: any) => product.id !== id));
  };

  const totalPrice = useMemo(() => currentCartProducts
    .map((product: any) => product.price * product.quantity)
    .reduce((currentTotal: number, price: number) => currentTotal + price, 0),
  [currentCartProducts]);

  return (
    <div className="cart__container">
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

        <div className="cart__content">
          <div className="cart__items">
            {currentCartProducts.map((product: any) => (
              <div key={product.id} className="cart__item">
                <CartItem
                  removeItem={removeItem}
                  product={product}
                  changeProductQuantity={ChangeProductQuantity}
                />
              </div>
            ))}
          </div>

          <div className="cart__total">
            <p className="cart__total__price">{totalPrice}</p>
            <p className="cart__total__text">
              {`Total for ${currentCartProducts.length} items`}
            </p>
            <div className="cart__total__line" />

            <button type="button" className="cart__total__button">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
