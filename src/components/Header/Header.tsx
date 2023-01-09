/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Logo } from '../Logo';
import '../../styles/Header.scss';
import burgerOpenIcon from '../../img/header/menu.svg';
import burgerCloseIcon from '../../img/header/close.svg';
import heartIcon from '../../img/header/favourites.svg';
import shopIcon from '../../img/header/purchases.svg';
import { BurgerMenu } from '../BurgerMenu';
import { Navigation } from '../Navigation';

const navigationLinks = [
  { to: '/', text: 'Home' },
  { to: '/phones', text: 'Phones' },
  { to: '/tablets', text: 'Tablets' },
  { to: '/Accessories', text: 'Accessories' },
];

export const Header = () => {
  const [burgerMenuOpen, isBurgerMenuOpen] = useState(false);

  if (burgerMenuOpen) {
import { BurgerMenu } from '../BurgerMenu';

interface Props {
  burgerMenu: boolean;
  isBurgerMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

const navigationLinks = [
  { to: '/', text: 'Home' },
  { to: '/phones', text: 'Phones' },
  { to: '/tablets', text: 'Tablets' },
  { to: '/Accessories', text: 'Accessories' },
];

export const Header: React.FC<Props> = ({
  burgerMenu,
  isBurgerMenu,
}) => {
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);

  if (burgerMenu) {
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
      <div className="container">
        <div className="header__content">
          <nav className="header__content__nav">
            <NavLink
              to="/"
              className="header__logo"
              onClick={() => isBurgerMenuOpen(false)}
            >
      {innerWidth > 640
        ? (
          <div className="header__container">
            <div className="header__nav">
              <Link
                to="/"
                onClick={() => isBurgerMenu(false)}
              >
                <Logo />
              </Link>
              <nav
                className="nav"
                role="navigation"
                aria-label="main navigation"
              >
                <NavItem path="/" text="Home" />
                <NavItem path="/phones" text="Phones" />
                <NavItem path="/tablets" text="Tablets" />
                <NavItem path="/accessories" text="Accessories" />
              </nav>
            </div>
            <div className="my-purchases">
              <nav className="my-purchases__nav">
                <div className="my-purchases__icon">
                  <NavItem
                    path="/favourites"
                    text=""
                    classname="my-purchases__img my-purchases__img--favourites"
                  />
                </div>
                <div className="my-purchases__icon">
                  <NavItem
                    path="/cart"
                    text=""
                    classname="my-purchases__img my-purchases__img--cart"
                  />
                </div>
              </nav>
            </div>
          </div>
        )
        : (
          <div className="header__container header__container--mob">
            <Link to="/">
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
            {burgerMenu ? (
              <button
                className="my-puchases__img my-puchases__img--menu"
                onClick={() => isBurgerMenu(false)}
              >
                <img src={burgerCloseIcon} alt="Menu" />
              </button>
            ) : (
              <button
                className="header__content__buttons-right menu"
                onClick={() => isBurgerMenuOpen(true)}
                className="my-puchases__img my-puchases__img--menu"
                onClick={() => isBurgerMenu(true)}
              >
                <img src={burgerOpenIcon} alt="Menu" />
              </button>
            )}

            <BurgerMenu
              navLinks={navigationLinks}
              burgerMenu={burgerMenu}
              isBurgerMenu={isBurgerMenu}
            />
            <div className="my-purchases__icon my-purchases__icon--menu">
              <button className="my-purchases__img my-purchases__img--menu" />
            </div>
          </div>
        </div>
        <BurgerMenu
          navigationLinks={navigationLinks}
          burgerMenuOpen={burgerMenuOpen}
          isBurgerMenuOpen={isBurgerMenuOpen}
        />
      </div>
    </header>
  );
};
