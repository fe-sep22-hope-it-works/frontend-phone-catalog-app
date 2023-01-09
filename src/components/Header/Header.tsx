/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Logo } from '../Logo';
import { NavItem } from './NavItem';
import '../../styles/Header.scss';
import burgerOpenIcon from '../../img/header/menu.svg';
import burgerCloseIcon from '../../img/header/close.svg';
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
    window.addEventListener('resize', () => {
      setInnerWidth(window.innerWidth);
    });

    return () => {
      window.removeEventListener('resize', () => {
        setInnerWidth(window.innerWidth);
      });
    };
  }, [innerWidth]);

  return (
    <header className="header">
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
            </Link>

            {burgerMenu ? (
              <button
                className="my-puchases__img my-puchases__img--menu"
                onClick={() => isBurgerMenu(false)}
              >
                <img src={burgerCloseIcon} alt="Menu" />
              </button>
            ) : (
              <button
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
        )}
    </header>
  );
};
