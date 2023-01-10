import React, { useState } from 'react';
import { Phone } from '../../types/Phone';

type Props = {
  children: React.ReactNode;
};

interface PhoneContextInterface {
  cartPhones: Phone[],
  setCartPhones: React.Dispatch<React.SetStateAction<Phone[]>>,
  phones: Phone[],
  setPhones: React.Dispatch<React.SetStateAction<Phone[]>>,
  saveCartPhones: (phone: Phone) => void,
}

export const PhoneContext = React.createContext<PhoneContextInterface>({
  cartPhones: [],
  setCartPhones: () => {},
  phones: [],
  setPhones: () => {},
  saveCartPhones: () => {},
});

export const PhoneProvider: React.FC<Props> = ({ children }) => {
  const [cartPhones, setCartPhones] = useState<Phone[]>(
    JSON.parse((localStorage.getItem('cartPhones') || '[]')),
  );
  const [phones, setPhones] = useState<Phone[]>([]);

  const saveCartPhones = (phone: Phone) => {
    const newCartPhones = cartPhones.find(cart => cart.id === phone.id)
      ? cartPhones.filter(cart => cart.id !== phone.id)
      : [...cartPhones, phone];

    setCartPhones(newCartPhones);

    localStorage.setItem('cartPhones', JSON.stringify(newCartPhones));
  };

  const contextValue = {
    cartPhones,
    setCartPhones,
    phones,
    setPhones,
    saveCartPhones,
  };

  return (
    <PhoneContext.Provider value={contextValue}>
      {children}
    </PhoneContext.Provider>
  );
};
