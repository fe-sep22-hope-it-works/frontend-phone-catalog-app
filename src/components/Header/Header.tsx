/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Logo } from '../Logo';
import { NavItem } from './NavItem';
import '../../styles/Header.scss';

export const Header = () => {
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);
  // const [menuIsOpen, setMenuIsOpen] = useState(false);

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
              <Link to="/">
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
            <div className="my-puchases">
              <nav className="my-puchases__nav">
                <div className="my-puchases__icon">
                  <NavItem
                    path="/favourites"
                    text=""
                    classname="my-puchases__img my-puchases__img--favourites"
                  />
                </div>
                <div className="my-puchases__icon">
                  <NavItem
                    path="/purchases"
                    text=""
                    classname="my-puchases__img my-puchases__img--purchases"
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

            <div className="my-puchases__icon my-puchases__icon--menu">
              <button className="my-puchases__img my-puchases__img--menu" />
            </div>
          </div>
        )}
    </header>
  );
};
