import React, { useContext } from 'react';

import cn from 'classnames';
import s from './Button.module.scss';
import { Phone } from '../../types/Phone';
import { PhoneContext } from '../PhoneContext/PhoneContext';

type Props = {
  phone: Phone,
};

export const Button: React.FC<Props> = ({ phone }) => {
  const {
    saveCartPhones,
    cartPhones,
  } = useContext(PhoneContext);

  const isAdded = cartPhones.find(cart => cart.id === phone.id);

  const handleCardButton = (phoneTo: Phone) => {
    saveCartPhones(phoneTo);
  };

  return (
    <button
      type="button"
      onClick={() => handleCardButton(phone)}
      className={cn(s.btn, {
        [s.btn_selected]: isAdded,
      })}
    >
      {isAdded ? 'Added' : 'Add to cart'}
    </button>
  );
};
