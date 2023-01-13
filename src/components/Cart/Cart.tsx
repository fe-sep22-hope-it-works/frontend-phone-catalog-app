import React, { useContext, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { CartItem } from '../CartItem';
import { Phone } from '../../types/Phone';
import { PhoneContext } from '../PhoneContext/PhoneContext';
import { Breadcrumbs } from '../Breadcrumbs';
import sadSmile from '../../img/sadsmiley.svg';

export const Cart: React.FC = () => {
  const {
    cartPhones, setCartPhones, saveCartPhones,
  } = useContext(PhoneContext);

  const ChangeProductQuantity = (productToChange: Phone, newQuantity = 1) => {
    const newCartProducts = cartPhones.map(product => {
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

    setCartPhones(newCartProducts);

    localStorage.setItem('cartPhones', JSON.stringify(newCartProducts));
  };

  const removeItem = (product: Phone) => {
    saveCartPhones(product);
  };

  const totalPrice = useMemo(() => cartPhones
    .map(product => product.price * (product.quantity || 1))
    .reduce((currentTotal: number, price: number) => currentTotal + price, 0),
  [cartPhones]);

  const totalQuantity = useMemo(() => cartPhones
    .map(product => product.quantity || 0)
    .reduce(
      (currentTotal: number, quantity: number) => currentTotal + quantity, 0,
    ),
  [cartPhones]);

  const clearCart = () => {
    setCartPhones([]);

    localStorage.setItem('cartPhones', JSON.stringify([]));
  };

  return (
    <div className="cart__container">
      <div className="cart">
        <Breadcrumbs
          breads={[
            { title: 'home', path: '/' },
            { title: 'Cart', path: '/cart' },
          ]}
        />
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
            {cartPhones.map(product => (
              <div key={product.id} className="cart__item">
                <CartItem
                  removeItem={removeItem}
                  product={product}
                  changeProductQuantity={ChangeProductQuantity}
    <div>
      {cartPhones.length > 0 ? (
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
                {cartPhones.map(product => (
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
                  <button
                    type="button"
                    className="cart__total__button"
                    onClick={clearCart}
                  >
                    Checkout
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="cart__empty">
          <div className="cart__empty__message">
            <p className="cart__empty__message__text">
              Your cart is empty
            </p>
            <img
              className="cart__empty__message__smile"
              src={sadSmile}
              alt="sadsmileIcon"
            />
          </div>

          <div className="cart__empty__img" />
          <Link className="cart__empty__link" to="/phones">
            <button
              className="cart__empty__button"
              type="button"
            >
              Continue shopping
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};
