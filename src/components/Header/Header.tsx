/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Logo } from '../Logo';
import '../../App.scss';
import burgerOpenIcon from '../../img/header/menu.svg';
import burgerCloseIcon from '../../img/header/close.svg';
import heartIcon from '../../img/header/favourites.svg';
import shopIcon from '../../img/header/purchases.svg';
import { BurgerMenu } from '../BurgerMenu/BurgerMenu';
import { Navigation } from '../Navigation';

const navigationLinks = [
  { to: '/', text: 'Home' },
  { to: '/phones', text: 'Phones' },
  { to: '/tablets', text: 'Tablets' },
  { to: '/accessories', text: 'Accessories' },
];

export const Header = () => {
  const [burgerMenuOpen, isBurgerMenuOpen] = useState(false);

  if (burgerMenuOpen) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'auto';
  }

  useEffect(() => {
    const handleWindowResize = () => {
      if (window.matchMedia('(min-width: 640px)').matches) {
        isBurgerMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  return (
    <header className="header">
      <div className="header__content">
        <nav className="header__content__nav">
          <NavLink
            to="/"
            className="header__logo"
            onClick={() => isBurgerMenuOpen(false)}
          >
            <Logo />
          </NavLink>

          {!burgerMenuOpen && (
            <Navigation
              navigationLinks={navigationLinks}
              burgerMenuOpen={burgerMenuOpen}
              isBurgerMenuOpen={isBurgerMenuOpen}
            />
          )}
        </nav>

        <div className="header__content__buttons">
          <NavLink
            to="/"
            className="header__content__buttons-right menu-moved"
          >
            <img src={heartIcon} alt="favorites" />
          </NavLink>

          <NavLink
            to="/"
            className="header__content__buttons-right menu-moved"
          >
            <img src={shopIcon} alt="shopCard" />
          </NavLink>

          {burgerMenuOpen ? (
            <button
              className="header__content__buttons-right menu"
              onClick={() => isBurgerMenuOpen(false)}
            >
              <img src={burgerCloseIcon} alt="Menu" />
            </button>
          ) : (
            <button
              className="header__content__buttons-right menu"
              onClick={() => isBurgerMenuOpen(true)}
            >
              <img src={burgerOpenIcon} alt="Menu" />
            </button>
          )}
        </div>
      </div>

      <BurgerMenu
        navigationLinks={navigationLinks}
        burgerMenuOpen={burgerMenuOpen}
        isBurgerMenuOpen={isBurgerMenuOpen}
      />
    </header>
  );
};
