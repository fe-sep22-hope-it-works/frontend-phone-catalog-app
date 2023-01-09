import React, { useState } from 'react';
import { Phone } from '../../types/phones';
// import { AuthForm } from './AuthForm';

type Props = {
  children: React.ReactNode;
};

interface PhoneContextInterface {
  cartPhoneIds: number[],
  setCartPhoneIds: React.Dispatch<React.SetStateAction<number[]>>,
  phones: Phone[],
  setPhones: React.Dispatch<React.SetStateAction<Phone[]>>,
}

export const PhoneContext = React.createContext<PhoneContextInterface>({
  cartPhoneIds: [],
  setCartPhoneIds: () => {},
  phones: [],
  setPhones: () => {},
});

export const PhoneProvider: React.FC<Props> = ({ children }) => {
  const [cartPhoneIds, setCartPhoneIds] = useState<number[]>([5, 10]);
  const [phones, setPhones] = useState<Phone[]>([]);

  const contextValue = {
    cartPhoneIds,
    setCartPhoneIds,
    phones,
    setPhones,
  };

  return (
    <PhoneContext.Provider value={contextValue}>
      {children}
    </PhoneContext.Provider>
  );
};
