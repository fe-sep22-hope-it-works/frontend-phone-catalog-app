import classNames from 'classnames';
import React, { useEffect, useState } from 'react';
import img from '../../img/card-images/iphone.svg';
import { Phone } from '../../types/Phone';

interface Props {
  product: Phone,
  changeProductQuantity: (productToChange: Phone, newQuantity: number) => void;
  removeItem: (product: Phone) => void;
}

export const CartItem: React.FC<Props> = ({
  product, changeProductQuantity, removeItem,
}) => {
  const [
    productQuantity, setProductQuantity,
  ] = useState(product.quantity ? product.quantity : 1);

  useEffect(() => {
    changeProductQuantity(product, productQuantity);
  }, [productQuantity]);

  const decrDisable = productQuantity === 1;

  return (
    <>
      <div className="cart__item__title">
        <button
          type="button"
          className="cart__item__title__button"
          aria-label="Save"
          onClick={() => removeItem(product)}
        />

        <img
          src={img}
          alt="iPhone 11 Pro Max"
          className="cart__item__title__image"
        />

        <div className="cart__item__title__text">
          {product.name}
        </div>
      </div>

      <div className="cart__item__price">
        <div className="cart__item__price__quantity">
          <button
            type="button"
            aria-label="Save"
            className={classNames(
              'cart__item__price__quantity__button',
              { 'cart__item__price__quantity__button-isDisabled': decrDisable },
            )}
            onClick={() => setProductQuantity(prevQty => prevQty - 1)}
            disabled={decrDisable}
          >
            -
          </button>
          <div
            className="cart__item__price__quantity__text"
          >
            {productQuantity}
          </div>
          <button
            type="button"
            aria-label="Save"
            className="cart__item__price__quantity__button"
            onClick={() => setProductQuantity(
              (prevQty: number) => prevQty + 1,
            )}
          >
            +
          </button>
        </div>

        <div className="cart__item__price__text">
          $
          {product.quantity ? (
            product.price * product.quantity
          ) : (
            product.price
          )}
        </div>
      </div>
    </>
  );
};
