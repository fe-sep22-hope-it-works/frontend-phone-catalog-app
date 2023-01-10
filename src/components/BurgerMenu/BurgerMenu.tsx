import classNames from 'classnames';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { NavLinks } from '../../types/NavLinks';
import './BurgerMenu.scss';

import heartIcon from '../../img/header/favourites.svg';
import shopIcon from '../../img/header/purchases.svg';
import { Navigation } from '../Navigation';

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
          to="/"
          onClick={() => isBurgerMenuOpen(false)}
          className="burger__menu__buttons-bottom"
        >
          <img
            src={heartIcon}
            alt="Favourites"
            className="burger__menu__buttons-images"
          />
        </NavLink>

        <NavLink
          to="/"
          onClick={() => isBurgerMenuOpen(false)}
          className="burger__menu__buttons-bottom"
        >
          <img
            src={shopIcon}
            alt="Shop"
            className="burger__menu__buttons-images"
          />
        </NavLink>
      </div>
    </div>
  );
};
