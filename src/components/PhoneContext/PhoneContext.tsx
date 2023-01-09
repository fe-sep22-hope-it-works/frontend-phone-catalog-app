import React, { useState } from 'react';
import { Phone } from '../../types/Phone';
// import { AuthForm } from './AuthForm';

type Props = {
  children: React.ReactNode;
};

interface PhoneContextInterface {
  cartPhones: Phone[],
  setCartPhones: React.Dispatch<React.SetStateAction<Phone[]>>,
  phones: Phone[],
  setPhones: React.Dispatch<React.SetStateAction<Phone[]>>,
}

export const PhoneContext = React.createContext<PhoneContextInterface>({
  cartPhones: [],
  setCartPhones: () => {},
  phones: [],
  setPhones: () => {},
});

export const PhoneProvider: React.FC<Props> = ({ children }) => {
  const [cartPhones, setCartPhones] = useState<Phone[]>([]);
  const [phones, setPhones] = useState<Phone[]>([]);

  const contextValue = {
    cartPhones,
    setCartPhones,
    phones,
    setPhones,
  };

  return (
    <PhoneContext.Provider value={contextValue}>
      {children}
    </PhoneContext.Provider>
  );
};
