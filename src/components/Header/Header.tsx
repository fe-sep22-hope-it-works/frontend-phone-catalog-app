/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useContext, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';
import { Logo } from '../Logo';
import '../../App.scss';
import burgerOpenIcon from '../../img/header/menu.svg';
import burgerCloseIcon from '../../img/header/close.svg';
import heartIcon from '../../img/header/favourites.svg';
import shopIcon from '../../img/header/purchases.svg';
// import ellipse from '../../img/header/ellipse.svg';
import { BurgerMenu } from '../BurgerMenu/BurgerMenu';
import { Navigation } from '../Navigation';
import { PhoneContext } from '../PhoneContext/PhoneContext';

const navigationLinks = [
  { to: '/', text: 'HOME' },
  { to: '/phones', text: 'PHONES' },
  { to: '/tablets', text: 'TABLETS' },
  { to: '/accessories', text: 'ACCESSORIES' },
];

export const Header = () => {
  const [burgerMenuOpen, isBurgerMenuOpen] = useState(false);
  const { favouritePhones, cartPhones } = useContext(PhoneContext);
  const favouritesCount = favouritePhones.length;
  const cartCount = cartPhones.length;

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
            to="/favourites"
            className={({ isActive }) => classNames(
              'header__content__buttons-right menu-moved', {
                'header__content__buttons-right--active': isActive,
              },
            )}
          >
            <img src={heartIcon} alt="favorites" />
            {favouritesCount > 0 && (
              <div className="header__ellips">
                {favouritesCount}
              </div>
            )}
          </NavLink>

          <NavLink
            to="/cart"
            className={({ isActive }) => classNames(
              'header__content__buttons-right menu-moved', {
                'header__content__buttons-right--active': isActive,
              },
            )}
          >
            <img src={shopIcon} alt="shopCard" />
            {cartCount > 0 && (
              <div className="header__ellips">
                {cartCount}
              </div>
            )}
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
