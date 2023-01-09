import classNames from 'classnames';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { HeaderNavLinks } from '../../types/HeaderNavLinks';
import './BurgerMenu.scss';

import heartIcon from '../../img/header/favourites.svg';
import shopIcon from '../../img/header/purchases.svg';
import { Navigation } from '../Navigation';

interface Props {
  navigationLinks: HeaderNavLinks[];
  burgerMenuOpen: boolean;
  isBurgerMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const BurgerMenu: React.FC<Props> = ({
  navigationLinks,
  burgerMenuOpen,
  isBurgerMenuOpen,

interface Props {
  navLinks: HeaderNavLinks[];
  burgerMenu: boolean;
  isBurgerMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

export const BurgerMenu: React.FC<Props> = ({
  navLinks,
  burgerMenu,
  isBurgerMenu,
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
        'burger__menu-open': burgerMenu,
      })}
    >
      <nav className="burger__menu__nav">
        <ul className="burger__menu__nav__list">
          {navLinks.map((link) => (
            <li key={link.text} className="burger__menu__nav__item">
              <NavLink
                to={link.to}
                onClick={() => isBurgerMenu(false)}
                className={({ isActive }) => classNames(
                  'burger__menu__nav__link',
                  {
                    'burger__menu__is-active': isActive,
                  },
                )}
              >
                {link.text}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      <div className="burger__menu__buttons">
        <button className="burger__menu__buttons-bottom" type="button">
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
        </button>

        <button className="burger__menu__buttons-bottom" type="button">
          <img
            src={shopIcon}
            alt="Shop"
            className="burger__menu__buttons-images"
          />
        </NavLink>
       </button>
      </div>
    </div>
  );
};
