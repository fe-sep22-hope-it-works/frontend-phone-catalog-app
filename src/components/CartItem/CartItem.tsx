/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
import classNames from 'classnames';
import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
import { Phone } from '../../types/Phone';
import { getPhoneImage } from '../api/phones';
import { Loader } from '../Loader.tsx/Loader';

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
  const [photo, setPhoto] = useState('');
  const [loader, setLoader] = useState(false);
  const photoFromServer = async () => {
    try {
      setLoader(true);
      const mainPhoto = await getPhoneImage(Number(product.id));

      setPhoto(mainPhoto[0]);
    } catch {
      throw new Error();
    } finally {
      setLoader(false);
    }
  };

  useEffect(() => {
    photoFromServer();
  }, []);

  useEffect(() => {
    changeProductQuantity(product, productQuantity);
  }, [productQuantity]);

  const decrDisable = productQuantity === 1;

  return (
    <div className="cart__item">
      <div
        className="cart__item__title"
      >
        <button
          type="button"
          className="cart__item__title__button"
          aria-label="Save"
          onClick={() => removeItem(product)}
        />

        {!loader
          ? (
            <img
              src={require(`../../${photo}`)}
              alt="iPhone 11 Pro Max"
              className="cart__item__title__image"
            />
          )
          : (
            <Loader classToAdd="loader--cart__item" />
          )}

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
              {
                'cart__item__price__quantity__button-isDisabled': decrDisable,
              },
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
    </div>
  );
};
