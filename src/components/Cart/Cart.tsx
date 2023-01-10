import React, { useContext, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { CartItem } from '../CartItem';
import { Phone } from '../../types/Phone';
import { PhoneContext } from '../PhoneContext/PhoneContext';

export const Cart: React.FC = () => {
  const { phones, cartPhones, setCartPhones } = useContext(PhoneContext);

  const cartPhoneById = phones.filter(phone => cartPhones.includes(phone.id));

  const ChangeProductQuantity = (productToChange: Phone, newQuantity = 1) => {
    const newCartProducts = cartPhoneById.map(product => {
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

    setCartPhones(newCartProducts.map(phone => phone.id));
  };

  const removeItem = (id: string) => {
    setCartPhones(cartPhoneById
      .filter(product => product.id !== id).map(phone => phone.id));
  };

  const totalPrice = useMemo(() => cartPhoneById
    .map(product => product.price * (product.quantity || 1))
    .reduce((currentTotal: number, price: number) => currentTotal + price, 0),
  [cartPhones]);

  const totalQuantity = useMemo(() => cartPhoneById
    .map(product => product.quantity || 0)
    .reduce(
      (currentTotal: number, quantity: number) => currentTotal + quantity, 0,
    ),
  [cartPhones]);

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
            {cartPhoneById.map(product => (
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
            <p className="cart__total__price">{`$${totalPrice}`}</p>
            <p className="cart__total__text">
              {`Total for ${totalQuantity} items`}
            </p>
            <div className="cart__total__line" />

            <Link to="/checkout">
              <button type="button" className="cart__total__button">
                Checkout
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
