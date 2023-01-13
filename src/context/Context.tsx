import React, { ReactNode } from 'react';
import { UserContextI } from '../types/UserContext';
import { useStorage } from '../utils/useStorage';

export const UserContext = React.createContext<UserContextI>({
  favouritesIds: [],
  setFavouritesIds: () => {},
  cartItems: [],
  setCartItems: () => {},
});

type Props = {
  children: ReactNode
};

export const UserContextProvider: React.FC<Props> = ({ children }) => {
  const [favouritesIds, setFavouritesIds] = useStorage([], 'Favorite');
  const [cartItems, setCartItems] = useStorage([], 'Cart');

  const contextValues = {
    favouritesIds,
    setFavouritesIds,
    cartItems,
    setCartItems,
  };

  return (
    <UserContext.Provider value={contextValues}>
      { children }
    </UserContext.Provider>
  );
};
