import { PhoneWithQuantity } from './PhoneWithQuantity';

export interface UserContextI {
  favouritesIds: string[],
  setFavouritesIds: (ids: string[]) => void,
  cartItems: PhoneWithQuantity[],
  setCartItems: (phones: PhoneWithQuantity[]) => void,
}
