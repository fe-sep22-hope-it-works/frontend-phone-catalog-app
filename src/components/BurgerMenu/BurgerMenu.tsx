import classNames from 'classnames';
import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { NavLinks } from '../../types/NavLinks';
import './BurgerMenu.scss';

import heartIcon from '../../img/header/favourites.svg';
import shopIcon from '../../img/header/purchases.svg';
import { Navigation } from '../Navigation';
import { PhoneContext } from '../PhoneContext/PhoneContext';

interface Props {
  navigationLinks: NavLinks[];
  burgerMenuOpen: boolean;
  isBurgerMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const BurgerMenu: React.FC<Props> = ({
  navigationLinks,
  burgerMenuOpen,
  isBurgerMenuOpen,
}) => {
  const { favouritePhones, cartPhones } = useContext(PhoneContext);
  const favouritesCount = favouritePhones.length;
  const cartCount = cartPhones.length;

  return (
    <div
      className={classNames('burger__menu', {
        'burger__menu-open': burgerMenuOpen,
      })}
    >
      <nav className="burger__menu__nav">
        <Navigation
          navigationLinks={navigationLinks}
          burgerMenuOpen={burgerMenuOpen}
          isBurgerMenuOpen={isBurgerMenuOpen}
        />
      </nav>

      <div className="burger__menu__buttons">
        <NavLink
          to="/favourites"
          onClick={() => isBurgerMenuOpen(false)}
          className="burger__menu__buttons-bottom"
        >
          <img
            src={heartIcon}
            alt="Favourites"
            className="burger__menu__buttons-images"
          />
          {favouritesCount > 0 && (
            <div className="header__ellips">
              {favouritesCount}
            </div>
          )}
        </NavLink>

        <NavLink
          to="/cart"
          onClick={() => isBurgerMenuOpen(false)}
          className="burger__menu__buttons-bottom"
        >
          <img
            src={shopIcon}
            alt="Shop"
            className="burger__menu__buttons-images"
          />
          {cartCount > 0 && (
            <div className="header__ellips">
              {cartCount}
            </div>
          )}
        </NavLink>
      </div>
    </div>
  );
};
