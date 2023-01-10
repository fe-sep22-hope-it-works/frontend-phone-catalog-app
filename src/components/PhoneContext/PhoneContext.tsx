import React, { useState } from 'react';
import { Phone } from '../../types/Phone';

type Props = {
  children: React.ReactNode;
};

interface PhoneContextInterface {
  cartPhones: string[],
  setCartPhones: React.Dispatch<React.SetStateAction<string[]>>,
  phones: Phone[],
  setPhones: React.Dispatch<React.SetStateAction<Phone[]>>,
  saveCartPhones: (value: string) => void,
}

export const PhoneContext = React.createContext<PhoneContextInterface>({
  cartPhones: [],
  setCartPhones: () => {},
  phones: [],
  setPhones: () => {},
  saveCartPhones: () => {},
});

export const PhoneProvider: React.FC<Props> = ({ children }) => {
  const [cartPhones, setCartPhones] = useState<string[]>(
    JSON.parse(localStorage.getItem('cartPhones') || ''),
  );
  const [phones, setPhones] = useState<Phone[]>([]);

  const saveCartPhones = (id: string) => {
    const newCartPhones = cartPhones.find(cart => cart === id)
      ? cartPhones.filter(cart => cart !== id)
      : [...cartPhones, id];

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
