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
  favouritePhones: Phone[],
  setFavouritePhones: React.Dispatch<React.SetStateAction<Phone[]>>,
  saveFavouritePhones: (phone: Phone) => void,
}

export const PhoneContext = React.createContext<PhoneContextInterface>({
  cartPhones: [],
  setCartPhones: () => { },
  phones: [],
  setPhones: () => { },
  saveCartPhones: () => { },
  favouritePhones: [],
  setFavouritePhones: () => { },
  saveFavouritePhones: () => { },
});

export const PhoneProvider: React.FC<Props> = ({ children }) => {
  const [cartPhones, setCartPhones] = useState<Phone[]>(
    JSON.parse((localStorage.getItem('cartPhones') || '[]')),
  );
  const [favouritePhones, setFavouritePhones] = useState<Phone[]>(
    JSON.parse((localStorage.getItem('favouritePhones') || '[]')),
  );
  const [phones, setPhones] = useState<Phone[]>([]);

  const saveCartPhones = (phone: Phone) => {
    const newCartPhones = cartPhones.find(cart => cart.id === phone.id)
      ? cartPhones.filter(cart => cart.id !== phone.id)
      : [...cartPhones, phone];

    setCartPhones(newCartPhones);

    localStorage.setItem('cartPhones', JSON.stringify(newCartPhones));
  };

  const saveFavouritePhones = (phone: Phone) => {
    const newFavouritePhones = favouritePhones.find(
      cart => cart.id === phone.id,
    )
      ? favouritePhones.filter(cart => cart.id !== phone.id)
      : [...favouritePhones, phone];

    setFavouritePhones(newFavouritePhones);

    localStorage.setItem('favouritePhones', JSON.stringify(newFavouritePhones));
  };

  const contextValue = {
    cartPhones,
    setCartPhones,
    phones,
    setPhones,
    saveCartPhones,
    favouritePhones,
    setFavouritePhones,
    saveFavouritePhones,
  };

  return (
    <PhoneContext.Provider value={contextValue}>
      {children}
    </PhoneContext.Provider>
  );
};
